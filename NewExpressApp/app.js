var express = require('express');
var app = express();


app.get("/",function(req,res){
  res.send("Hi There");
})
app.get("/:param1",function(req, res){
  res.send(req.params.param1);
})

app.get("/:param1/:param2",function(req,res){
  var param1 = req.params.param1;
  var param2 = parseInt(req.params.param2);
  var arr = [];

   for (var i = 0; i < param2; i++) {
     arr.push(param1)
   }
   res.send(arr)
})

app.get("*",function(req,res){
  res.send("Sorry Page not found....What are you doing with your life?");
})

ip = '127.0.0.1';
port = 8000;

app.listen(port,ip,function(){
  console.log("The Server has started");
})
