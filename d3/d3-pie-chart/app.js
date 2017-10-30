var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);
var width = 600;
var height = 600;
var minYearData = birthData.filter(d => d.year === minYear);



var continents = birthData.reduce((accu,d) =>{
  if(accu.indexOf(d.continent) === -1){
    accu.push(d.continent);
  }
  return accu;
},[])

var colorScale = d3.scaleOrdinal()
                      .domain(continents)
                      .range(d3.schemeCategory10)




d3.select('svg')
      .attr('width', width)
      .attr('height', height)
    .append('g')
      .attr('transform',`translate(${width/2},${height/2})`)
      .classed('charts',true)


var input = d3.select('input')
                .property('min',minYear)
                .property('max', maxYear)
                .property('value',minYear)


 input.on('input',function(){
   makeGraph(+d3.event.target.value)
 })


makeGraph(minYear)

function makeGraph(year){

  var yearData = birthData.filter(d => d.year === year);

  var arcs = d3.pie()
                .value(d => d.births)
                (yearData)

  var path = d3.arc()
                .outerRadius(width/2 - 10)
                .innerRadius(0)
                .padAngle(0.02)
                .cornerRadius(20)

  var charts = d3.select('.charts')
                .selectAll('.arc')
                .data(arcs)

  charts
    .exit()
    .remove()

    charts
      .enter()
      .append('path')
        .classed('arc', true)
      .merge(charts)
        .attr('fill',d => colorScale(d.data.continent))
        .attr('stroke', 'black')
        .attr('d', path)

}
