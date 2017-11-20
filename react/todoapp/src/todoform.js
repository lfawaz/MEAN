import React, { Component } from 'react'

class TodoForm extends Component {
  render(){
  return(
    <div className='form-div'>
    <form className='todo-form'>
      <input
        className='input-text-class'
        name="inputText"
        type='text'
        placeholder='What need to be done?'
        value={this.state.inputText}
        // OnChange={(e) => this.setState({inputText: e.target.value})}
        ></input>
      <input className='submit-button' type='submit' value='SAVE'></input>
    </form>
    </div>
  )
}
}

export default TodoForm
