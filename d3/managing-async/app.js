// write your code here!


d3.json('./countries.json', function(error,data){
  if(error) throw error

  d3.select('body')
      .selectAll('h3')
      .data(data.geonames)
      .enter()
    .append('h3')
    .text(d => d.countryName)


});


d3.csv('./simplemaps-worldcities-basic.csv',function(row){
  if(+row.pop < 10000) return;
  return {
    cityname: row.city;
    countrycode: row.iso2;
    population: +row.pop
  }
},function(error,data){
  if(error) throw error;

  console.log(data);
})
