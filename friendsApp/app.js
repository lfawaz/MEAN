var express = require('express')
var app = express()
var ejs = require('ejs')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))

var friends = ['Lily', 'Michael', 'James', 'Susan']

app.get('/',function(req, res){
  res.send("This is my Friends App")
})

app.get('/friends',function(req, res){
  res.render('friends.ejs', {friends: friends})

})

app.post('/newFriend',function(req, res){
  friends.push(req.body.newfriend)
  res.redirect('/friends')
})


app.listen(8000,'127.0.0.1',function(){
  console.log("Server Started!!!")
})
