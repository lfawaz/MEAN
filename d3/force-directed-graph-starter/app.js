d3.csv('./senate_committee_data.csv', function(d, i, headers) {
  var committees = headers.slice(2).filter(h => d[h] === '1');
  return {
    name: d.name,
    party: d.party,
    committees: committees
  }
}, function(error, nodes) {
  if (error) throw error;


  var links = nodes.reduce((accu, nextValue,index) => {
    var senators = nodes.slice(index+1,nodes.length)
        var committees = nextValue.committees

        senators.forEach(function(value, index){
          var commonCommitteeSize = value.committees.filter(committee => committees.includes(committee)).length
          if(commonCommitteeSize > 0){
            accu.push({
              source: nextValue.name,
             target: value.name
           })

         }
    })
       return accu

    },[])
    var width = 750;
    var height = 750;


    var svg = d3.select('svg')
                    .attr('width', width)
                    .attr('height', height)

    var lineSelection = svg
                          .append('g')
                          .classed('links',true)

    var nodeSelection = svg
                          .append('g')
                          .classed('nodes',true)

    var tooltip = svg
                    .append("div")
                    .classed('tooltip',true)


    console.log(nodes,links)

    makeGraph(nodes, links)

     var simulation = d3.forceSimulation(nodes)

     simulation
       .force('center',d3.forceCenter( width / 2, height / 2))
       .force('charge', d3.forceManyBody().strength(-100))
       .force('links', d3.forceLink(links)
                            .id(d => d.name)
                            .distance( d => {
                              var count1 = d.source.committees.length;
                              var count2 = d.target.committees.length;
                              return 25 * Math.max(count1,count2)
                            }))
            .on('tick', () => {
              lineSelection
               .selectAll('line')
                  .attr('x1', d => d.source.x)
                  .attr('y1', d => d.source.y)
                  .attr('x2', d => d.target.x)
                  .attr('y2', d => d.target.y);


                  nodeSelection
                    .selectAll('circle')
                      .attr('cx', d => d.x)
                      .attr('cy', d => d.y);



            });

      function makeGraph(nodes, links){



        var colorMapper = d3.scaleOrdinal()
                                .domain(['R','D','I'])
                                .range(['red','blue','#ccc'])

        var nodesUpdate =   nodeSelection
                              .selectAll('circle')
                              .data(nodes, d => d.name)

        nodesUpdate
            .exit()
            .remove()

        nodesUpdate
        .enter()
        .append('circle')
        .merge(nodesUpdate)
          .attr('r', 15)
          .attr('fill', d => colorMapper(d.party))
          .attr('stroke', "white")
          .attr('stroke-width', 3)
          .call(d3.drag()
                  .on('start',dragStart)
                  .on('drag', drag)
                  .on('end', dragEnd))
          .on('mousemove', showTooltip)
          .on('mouseout', hideTooltip)

        var linksUpdate = lineSelection
                            .selectAll('line')
                            .data(links, d => d.source + d.target)

        linksUpdate
            .exit()
            .remove()

        linksUpdate
          .enter()
          .append('line')
          .merge(linksUpdate)

      }
function dragStart(d){
  simulation.alpha(0.5).restart()
  d.fx = d.x;
  d.fy = d.y;
}

function drag(d){
  d.fx = d3.event.x;
  d.fy = d3.event.y;

}

function dragEnd(d){
  simulation.alpha(0)
  d.fx = null;
  d.fy = null;
}

function showTooltip(d){
  var tooltip = d3.select('.tooltip')
  tooltip
    .style('opacity',1)
    .style('left', d3.event.x + "px")
    .style('top',d3.event.y + "px")
    .html(`<p>Name: ${d.name}</p>
           <p>Committees</p>
           <ol>${d.committees}</ol>`)
}


function hideTooltip(d){
  var tooltip = d3.select('.tooltip')
  tooltip
    .style('opacity',0)
}

});
