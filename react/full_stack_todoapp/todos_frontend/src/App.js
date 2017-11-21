import React, { Component } from 'react';
import './App.css';
// import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import * as apiCalls from './api'
const API_URL = "/api/todos/"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:[]
    }
    this.addTodo = this.addTodo.bind(this)
  }

  async addTodo(val){
    let newTodo = await apiCalls.addTodo(val)
    this.setState({todos: [...this.state.todos,newTodo]})

  }
  componentWillMount(){
    this.getTodos()
  }

  async getTodos(){
      let todos = await apiCalls.getTodos()
      this.setState({todos})


  }

  onDelete(id){
    const DELETE_URL = API_URL + id
    fetch(DELETE_URL,{
      method: 'DELETE',
    }).then(function(res){
      console.log("deleted Item!")
    }).catch(function(err){
      console.log(err)
    }).then(newTodo => {
      const todos = this.state.todos.filter(todo => todo._id !==id)
      this.setState({todos})
    })
  }

  onToggle(todo){
    const PUT_URL = API_URL + todo._id
    fetch(PUT_URL,{
      method: 'PUT',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({completed: !todo.completed})
    }).then(function(res){
      return res.json()
    }).catch(function(err){
      console.log(err)
    }).then(newTodo => {
      const todos = this.state.todos.map(onetodo =>{
        if(onetodo._id === todo._id){
          onetodo.completed = !todo.completed
        }
        return onetodo
      })
      this.setState({todos})
    })
  }
  render() {
    const todolist = this.state.todos.map((todo) => (
      <TodoItem key={todo._id} {...todo}
         onDelete={this.onDelete.bind(this,todo._id)}
         onToggle={this.onToggle.bind(this,todo)}
         />
    ))
    return (
      <div className="App">

      <p>todo<strong>list</strong></p>
      <TodoForm addTodo={this.addTodo}/>
      {todolist}
      </div>
    );
  }
}

export default App;
