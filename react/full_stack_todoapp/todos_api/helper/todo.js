var db = require("../models")

exports.getTodos = function(req, res){
  db.Todo.find()
            .then(function(todos){
                res.json(todos);
              })
            .catch(function(err){
              res.send(err);
            })
};

exports.postTodo = function(req, res){
  db.Todo.create(req.body)
  .then(function(todo){
    res.json(todo);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.getTodo = function(req, res){
  db.Todo.findById(req.params.todoid)
  .then(function(todo){
    res.json(todo)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.putTodo = function(req, res){
  db.Todo.findOneAndUpdate({_id: req.params.todoid}, req.body, {new: true})
  .then(function(todo){
    res.json(todo);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.deleteTodo = function(req, res){
  db.Todo.remove({_id: req.params.todoid}).
  then(function(todo){
    res.send("Deleted record " + req.params.todoid)
  })
  .catch(function(err){
    res.send(err)
  })
}
module.exports = exports;
