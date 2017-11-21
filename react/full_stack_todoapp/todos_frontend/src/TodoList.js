import React, { Component } from 'react'

class TodoList extends Component{
  render(){

     const todolist = this.props.todolist.map((todo) =>
       <li> <span
         style={{
             textDecoration: todo.completed ? 'line-through' : 'none'
           }}
        key={todo._id}>{todo.name}</span><span> X </span></li>
     )
    return(
        <ul>
          {todolist}
        </ul>
      )
  }
}

export default TodoList
