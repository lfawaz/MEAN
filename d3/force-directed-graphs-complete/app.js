d3.csv('./senate_committee_data.csv', function(d, i, headers) {
  var committees = headers.slice(2).filter(h => d[h] === '1');
  return {
    name: d.name,
    party: d.party,
    committees: committees
  }
}, function(error, nodes) {
  if (error) throw error;

  var links = makeLinks(nodes);
  var width = 750;
  var height = 750;
  var svg = d3.select("svg")
                  .attr("width", width)
                  .attr("height", height);

  var linkGp = svg.append('g')
                   .classed("links", true);

  var nodeGp = svg.append('g')
                   .classed("nodes", true);

  var simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("link", d3.forceLink(links)
                     .distance(d => {
                      var count1 = d.source.committees.length;
                      var count2 = d.target.committees.length;
                      return 25 * Math.max(count1, count2);
                     })
                     .id(d => d.name))
    .on("tick", () => {
      linkGp
        .selectAll("line")
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      nodeGp
        .selectAll("circle")
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
    });

  graph(nodes, links);

  function graph(nodeData, linkData) {
    var partyScale = d3.scaleOrdinal()
                       .domain(["D", "R", "I"])
                       .range(["blue", "red", "#ccc"]);

    var nodeUpdate = nodeGp
      .selectAll("circle")
      .data(nodeData, d => d.name);

    nodeUpdate
      .exit()
      .remove();

    nodeUpdate
      .enter()
      .append("circle")
        .attr("r", 15)
        .attr("fill", d => partyScale(d.party))
        .attr("stroke", "white")
        .attr("stroke-width", 3)


    var linkUpdate = linkGp
      .selectAll("line")
      .data(linkData, d => d.source.name + d.target.name);

    linkUpdate
      .exit()
      .remove();

    linkUpdate
      .enter()
      .append("line");
  }


  function makeLinks(nodes) {
      console.log("THIS WORKED AGAIN!!")
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

        return links
  }
});
