var express = require('express'),
    app = express(),
    mongoose = require("mongoose");

var todoRoutes = require("./routes/todos");
var bodyParser = require('body-parser');
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/',function(req, res){
  res.sendFile("index.html")
});

app.post('/',function(req, res){
  // console.log(req.body)
  console.log("This ran")
});

app.use('/api/todos', todoRoutes);

port = 3000;
ip = 'localhost'

app.listen(port, ip,function(){
  console.log("APP IS RUNNING ON " + ip + ":" + port)
});
