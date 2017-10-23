var express = require('express');
var app = express();


app.get('/',function(req, res){
  res.send("My first Express page");
})

app.get('/dog',function(req, res){
  res.send("This is my dog page");
})

app.get('/bye',function(req, res){
  res.send("This good bye page");
})

var port = 8000;
var ip = '127.0.01'
app.listen(port, ip,function(){
  console.log("Server started at:" + ip + ":" + port);
})
