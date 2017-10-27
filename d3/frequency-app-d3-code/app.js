// write your code here!
var width = 600;
var height = 600;
var barPadding = 5;

var svg = d3.select('svg')
              .attr('width', width)
              .attr('height', height)


d3.select('#inputForm')
  .on('submit',function(){
    d3.event.preventDefault();

    var text = d3.select('input').property('value')
    var newdata = letterCount(text)
    // console.log(newdata)

    var numBars = newdata.length
    var barWidth = width / numBars - barPadding

    d3.select('#phrase')
        .text(`Analysis of: ${text}`)


     var letters = svg
       .selectAll('rect')
       .data(newdata,function(d){
         return d.character
       })



    letters
      .classed("new",false)
      .exit()
      .remove();

      letters
       .enter()
       .append('rect')
        .classed('new', true)
      .merge(letters)
        .style("width", barWidth)
        .style("height", function(d){
         return d.count * 20 + 'px'
       })
       .attr('x',function(d,i){
         return (barWidth + barPadding) * i
       })
       .attr('y',function(d){
         return height - d.count * 20 + 'px'
       })
       .classed('letter',true)


d3.select("#count")
    .text("(New Characters:)" + letters.enter().nodes().length)

  d3.select('input').property('value',"")

  })


function letterCount(sentence){

  var letterCounts = []

  var countsObject = sentence.toLowerCase().split("").reduce((accu,nextValue)=>{
    if(accu[nextValue] === undefined){
      accu[nextValue] = 1
    }else{
      accu[nextValue]++
    }
    return accu
  },{})

  // Object.keys(countsObject).forEach(function(value){
  //   console.log(value)
  // })


  Object.keys(countsObject).forEach(function(value){
    var obj = {'character': value, 'count': countsObject[value]}
    letterCounts.push(obj)
  })

  return letterCounts

}
