// write your code here!

var width = 800;
var height = 600;
var padding = 50;
var barPadding = 1;

var ageData = regionData.filter(d=> d.medianAge !== null);
var ageDataExtent = d3.extent(ageData, d => d.medianAge);

var xScale = d3.scaleLinear()
                    .domain(ageDataExtent)
                    .rangeRound([padding, width - padding])

var histogram = d3.histogram()
                  .domain(xScale.domain())
                  .thresholds(xScale.ticks())
                  .value(d => medianAge);


var bin = histogram(ageData);


var yScale = d3.scalreLinear()
                  .domain([0,d3.max(bins, d => d.length)])
                  .range([height - padding , padding])
