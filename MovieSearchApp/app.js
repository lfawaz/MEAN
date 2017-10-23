var express = require("express")
var app = express()
var request = require("request")
var ejs = require('ejs')

app.set('view engine','ejs')

app.get('/',function(req,res){
  res.render('search')
})

app.get('/movies',function(req,res){
  var searchterm = req.query.search;
  console.log(searchterm);
  // var url = "http://www.omdbapi.com/?s=" + searchterm + "&apikey=thewdb";
  var url = "http://www.omdbapi.com/?s=Iowa&apikey=thewdb";

  request(url,function(error, response, body){
    var movies = JSON.parse(body)["Search"];
    res.render('movies',{movies: movies});
  })
})


app.listen(8000,'127.0.0.1',function(){
  console.log('Movie Search App has started')
})
