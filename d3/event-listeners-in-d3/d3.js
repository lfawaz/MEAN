$(document).ready(function(){
  var input = d3.select('input');
  var preview = d3.select('.preview')

  // preview.remove()
  input.on('keypress',function(){
    if(input.property('value') == ''){
      preview.classed('hide',true)
    }
    else{
      preview
       .classed('hide',false)
       .text(input.property('value'))
    }
        })

  d3.select('#addNote').on('click', function(){
      d3.event.preventDefault();


      d3.select('#notes')
      	.append("p")
      		.classed("note",true)
      		.text(input.property('value'))
  	input.property('value','');
      preview.classed('hide',true)
  })

  d3.select('#removeNote').on('click', function(){
    d3.event.preventDefault();
    d3.selectAll('p').remove()
  })

  d3.select('#iamFeelingLucky').on('click', function(){
    d3.event.preventDefault();
    d3.selectAll('p').style('font-size',function(){
      return Math.random() * 100 + 'px'
    })
  })

})
