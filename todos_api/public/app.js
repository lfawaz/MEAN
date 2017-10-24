$(document).ready(function(){
	$.getJSON('/api/todos').
  then(getTodos)

  $("#todoInput").keypress(function(event){
    if(event.which == 13){
      postTodo()
    }
  })

	$(".list").on('click', 'span',
	function(){
		deleteTodo($(this).parent())
	}
)

});


function getTodos(todos){
  todos.forEach(addTodo)
}


function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>')
	newTodo.data('id', todo._id)
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

function deleteTodo(todo){
	taskId = todo.data('id');
	deleteURL = '/api/todos/' + taskId;
	 $.ajax({
		 method: 'DELETE',
		 url: deleteURL,
	 }).then(function(data){
		 console.log(data)
		 todo.remove();
	 })
	 .catch(function(err){
		 console.log(err)
	 })
 }
