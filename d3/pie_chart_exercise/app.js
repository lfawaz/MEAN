var width = 600;
var height = 600;

var minYear = d3.min(birthData, d => d.year)
var maxYear = d3.max(birthData, d => d.year)

var input = d3.select('input')
                .property('min',minYear)
                .property('max',maxYear)
                .property('value',minYear)

var month = new Set(birthData.map(d => d.month))


var colorScale = d3.scaleOrdinal()
                      .domain(month)
                      .range(d3.schemeCategory20)

d3.select('svg')
        .attr('width',width)
        .attr('height', height)
      .append('g')
        .attr('transform',`translate(${width/2},${height/2})`)
        .classed('charts',true)


makeGraph(minYear)


input.on('input', function(){
  makeGraph(+d3.event.target.value);
})


function makeGraph(year){

  var yearData = birthData.filter(d => d.year === year);

  var arcs = d3.pie()
                  .value(d => d.births)
                  (yearData)

  var path = d3.arc()
                  .outerRadius(width/2)
                  .innerRadius(0)

  var update = d3.select('.charts')
                  .selectAll('.arc')
                  .data(arcs)

  update
    .exit()
    .remove()

  update
    .enter()
    .append('path')
      .classed('arc', true)
    .merge(update)
      .attr('fill', d => colorScale(d.data.month))
      .attr('stroke', 'black')
      .attr('d', path)

}
