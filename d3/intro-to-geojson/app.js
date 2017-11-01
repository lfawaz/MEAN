d3.json('./sample_geo.json',function(error,data){
  if(error) throw error

  path = d3.geoPath()

  d3.select('svg')
      .attr('height', 600)
      .attr('width', 600)
        .selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('fill', d=> d.properties.color)

})
