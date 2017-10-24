$(document).ready(function(){
	$.getJSON('/api/todos').
  then(getTodos)

  $("#todoInput").keypress(function(event){
    if(event.which == 13){
      postTodo()
    }
  })

  $(".list").on('click', 'li', function(){
    updateTodo($(this))
  })

	$(".list").on('click', 'span',
	function(e){
    e.stopPropagation();
    console.log("span clicked!")
		deleteTodo($(this).parent());

	}
)

});


function getTodos(todos){
  todos.forEach(addTodo)
}


function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
	newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
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
	deleteURL = '/api/todos/' + todo.data('id');
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


function updateTodo(todo){
  var isDone = !todo.data('completed');
  var updateURL = '/api/todos/' + todo.data('id');
  $.ajax({
    method: 'PUT',
    url: updateURL,
    data: {'completed': isDone}
  }).then(function(data){
    // console.log(data)
    todo.toggleClass('done')
    todo.data('completed', isDone)
  }).catch(function(err){
    console.log(err)
  })

}
