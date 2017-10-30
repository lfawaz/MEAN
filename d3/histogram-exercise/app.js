// write your code here!

var width = 800;
var height = 600;
var padding = 50;
var barPadding = 1;

var fullRegionData = regionData.filter(d => d.medianAge !== null)



var xScale = d3.scaleLinear()
                  .domain(d3.extent(regionData, d=>d.medianAge))
                  .rangeRound([padding, width - padding])


var histogram = d3.histogram()
                      .domain(xScale.domain())
                      .thresholds(xScale.ticks())
                      .value(d => d.medianAge)

var bins = histogram(fullRegionData)

var yScale = d3.scaleLinear()
                    .domain([0,d3.max(bins, d=> d.length)])
                    .rangeRound([height - padding, padding])

var svg = d3.select('svg')
              .attr('width', width)
              .attr('height', height)


var xAxis = d3.axisBottom(xScale)

var yAxis = d3.axisLeft(yScale)

svg
  .append('g')
  .attr('transform',`translate(0,${height - padding})`)
  .call(xAxis)


svg
    .append('g')
    .attr('transform',`translate(${padding},0)`)
    .call(yAxis)


svg
  .append('text')
  .style('text-align','middle')
  .text('Median Age')
  .attr('x', (width - padding)/2)
  .attr('y', height -15)

  svg
    .append('text')
    .attr('transform','rotate(-90)')
    .style('text-align','middle')
    .text('Frequency')
    .attr('x', - height / 2)
    .attr('y', 15)

svg
  .selectAll('rect')
    .data(bins)
    .enter()
   .append('rect')
     .attr('x', d => xScale(d.x0) + barPadding )
     .attr('y', d => yScale(d.length))
     .attr('height', d => height - padding - yScale(d.length))
     .attr('width', d => xScale(d.x1) - xScale(d.x0) - barPadding)
     .attr('fill','blue')
