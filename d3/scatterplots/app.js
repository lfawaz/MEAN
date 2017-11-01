var width = 600;
var height = 600;
var padding = 30;

//get extents for each data point

var lifeExpExtent = d3.extent(birthData2011, d => d.lifeExpectancy)
var birthsExtent = d3.extent(birthData2011, d => d.births)
var birthPopExtent = d3.extent(birthData2011, d => d.births / d.population )
var popDensityExtent = d3.extent(birthData2011, d => d.population / d.area)


// create scale for scatter plot
var yScale = d3.scaleLinear()
                  .domain(lifeExpExtent)
                  .range([height - padding, padding])

var xScale = d3.scaleLinear()
                    .domain(birthPopExtent)
                    .range([padding, width - padding])


var radiusScale = d3.scaleLinear()
                          .domain(birthsExtent)
                          .range([2,40])

var colorScale = d3.scaleLinear()
                            .domain(popDensityExtent)
                            .range(['lightgreen','black'])

//create x and y Axis
var xAxis = d3.axisBottom(xScale)
                .tickSize(-height + 2 * padding)
                .tickSizeOuter(0)

var yAxis = d3.axisLeft(yScale)
                  .tickSize(-width + 2 * padding)
                  .tickSizeOuter(0)


var scatter = d3.select('svg')
                      .attr('width', width)
                      .attr('height', height)

var tooltip = d3.select('body')
                  .append('div')
                  .classed('tooltip', true)


scatter
  .append('g')
  .attr('transform',`translate(0,${height - padding})`)
  .call(xAxis)

scatter
  .append('g')
  .attr('transform',`translate(${padding},0)`)
  .call(yAxis)

scatter
    .selectAll('circle')
    .data(birthData2011)
    .enter()
  .append('circle')
    .attr('cx', d => xScale(d.births/d.population) )
    .attr('cy', d => yScale(d.lifeExpectancy))
    .attr('r', d => radiusScale(d.births))
    .attr('fill', d => colorScale(d.population/d.area))
    .on('mousemove',function(d){
      tooltip
        .style('opacity',1)
        .style('left', d3.event.x + 'px')
        .style('top', d3.event.y + 'px')
        .html(`
          <p>Region: ${d.region}</p>
          <p>Births: ${d.births.toLocaleString()}.</p>
          <p>Population: ${d.population.toLocaleString()}</p>
          <p>Area: ${d.area.toLocaleString()}</p>
          <p>Life Expectancy: ${d.lifeExpectancy.toLocaleString()}</p>
        `)

        })
        .on('mouseout',function(){
          tooltip
            .style('opacity',0)
    })


scatter
  .append('text')
  .attr('x',width/2)
  .attr('y',height - padding)
  .attr('dy','1.5em')
  .style('text-anchor', 'middle')
  .text('Population Density')

  scatter
    .append('text')
    .attr('x',width/2)
    .attr('y', padding)
    .style('font-size',"1.5em")
    .style('text-anchor', 'middle')
    .text('Birth by Country in 2011')

scatter
    .append('text')
    .attr('x',- height /2)
    .attr('y', padding)
    .attr('transform','rotate(-90)')
    .attr('dy', "-1.1em")
    .style('text-anchor', 'middle')
    .text('Life Expectancy')
