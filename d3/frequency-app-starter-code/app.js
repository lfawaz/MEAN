// write your code here!

d3.select('#inputForm')
  .on('submit',function(){
    d3.event.preventDefault();

    var text = d3.select('input').property('value')
    var newdata = letterCount(text)
    console.log(newdata)
    d3.select('#phrase')
        .text(`Analysis of: ${text}`)


     var letters = d3.select("#letters")
       .selectAll('span')
       .data(newdata,function(d){
         return d.character
       })

    letters
      .classed("new",false)
      .exit()
      .remove();

      letters
       .enter()
       .append('span')
        .classed('new', true)
      .merge(letters)
        .style("width", '20px')
        .style('line-height', "20px")
        .style('margin-right', "5px")
        .style("height", function(d){
         return d.count * 20 + 'px'
       })
       .text(function(d){
         return d.character
       }).classed('letter',true)


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
