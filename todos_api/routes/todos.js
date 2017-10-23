var express = require('express');
var router = express.Router();
var db = require("../models")
var helpers = require('../helper/todo')


router.route('/')
  .get(helpers.getTodos)
  .post(helpers.postTodo)

 router.route('/:todoid')
   .get(helpers.getTodo)
   .put(helpers.putTodo)
   .delete(helpers.deleteTodo)

module.exports = router;
