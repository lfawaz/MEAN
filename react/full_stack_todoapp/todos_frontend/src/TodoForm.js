import React, { Component } from 'react'

class TodoForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e){
    const inputValue = e.target.value
    this.setState({inputValue})
  }

  handleClick(){
    this.props.addTodo(this.state.inputValue)
  }
  render() {
    return (
      <div>
        <input
          type='text'
          onChange={(e) => this.handleChange(e)}
          />
        <input type='button' value='Add To Do'
        onClick={this.handleClick}
        />
      </div>

    )
  }
}

export default TodoForm
