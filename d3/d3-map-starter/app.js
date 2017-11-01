


 d3.queue()
  .defer(d3.json,"https://unpkg.com/world-atlas@1.1.4/world/50m.json")
  .defer(d3.csv, './country_data.csv', function(row){
    return {
      country: row.country,
      countryCode: row.countryCode,
      population: +row.population,
      medianAge: +row.medianAge,
      fertilityRate: +row.fertilityRate,
      populationDensity: +row.population/+row.landArea,
    }
  })
  .await(function(error, mapData, populationData){
    if(error) throw error;

     var geoData = topojson.feature(mapData, mapData.objects.countries).features;
      // console.log(geoData)
      // console.log(populationData)
     geoData.forEach(function(element){
       var countryData = populationData.filter(d => d.countryCode === element.id);
       element.properties = countryData;
     })

     var width = 960;
     var height = 600;

     var projection = d3.geoMercator()
                           .scale(125)
                           .translate([width/2,height/1.4]);

     var path = d3.geoPath()
                      .projection(projection);


     d3.select('svg')
            .attr('width', width)
            .attr('height', height)
          .selectAll(".country")
            .data(geoData)
            .enter()
            .append('path')
              .attr('d', path)
              .classed('country',true)


      var select = d3.select('select');

      select.on('change', d => setColor(d3.event.target.value));

      setColor(select.property("value"));



function setColor(val){

        var colorRanges = {
          population: ['white', 'purple'],
          medianAge: ['white', 'red'],
          fertilityRate: ['white', 'black'],
          populationDensity: ['white', 'orange'],

        };

        var colorScale = d3.scaleLinear()
                                .domain(d3.extent(populationData, d => d[val]))
                                .range(colorRanges[val])



         d3.selectAll('.country')
             .transition()
             .duration(750)
             .ease(d3.easeBackIn)
             .attr('fill', d => {
               var data = d.properties[0]
               return data ? colorScale(data[val]) : "#ccc"
             })

      }
  })
