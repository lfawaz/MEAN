$(document).ready(function(){
	$.getJSON('/api/todos').
  then(getTodos)

  $("#todoInput").keypress(function(event){
    if(event.which == 13){
      postTodo()
    }
  })
});


function getTodos(todos){
  todos.forEach(addTodo)
}


function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + '</li>')
  if(todo.completed){
    newTodo.addClass("done")
  }
  $(".list").append(newTodo)
}

function postTodo(){
  var userInput = $("#todoInput").val()
  $.post('/api/todos', {name: userInput}).then(function(todo){
    $("#todoInput").val('');
    addTodo(todo);
  })
}
