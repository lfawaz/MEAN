import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './todoform.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todos: [],
      newTodo: ''
    };
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const todos = [...this.state.todos,this.state.newTodo]
    this.setState({todos,newTodo: ''})
  }
  render() {
    const {newTodo} = this.state
    const todos = this.state.todos.map((value,key)=>(
      <li key={key}>{value}</li>
    ))
    return (
      <div className="App">
      <div>
          <h1 className="App-title">Simple todo App</h1>
          <form className='todo-form' onSubmit={this.handleSubmit}>
            <input
              className='input-text-class'
              name="newTodo"
              type="text"
              placeholder="What need to be done?"
              value={newTodo}
              onChange={(e) => this.setState({[e.target.name]: e.target.value})}
              ></input>
            <input className='submit-button' type='submit' value='SAVE'></input>
          </form>
          <ol>
            {todos}
          </ol>
          </div>
      </div>
    );
  }
}

export default App;
