import React, { Component } from 'react'
import './signup.css'
import Navbar from './navbar'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      username:'',
      password:'',
      profileUrl: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    fetch('/api/auth/signup',{
      method: 'POST',
      headers: new Headers({'Content-Type':'application/json'}),
      body: JSON.stringify(this.state)
    }).then(data=> console.log(data))
    .catch((err)=>(console.log(err)))

  }
  render(){
    return(
      <div className="div-form">

        <Navbar text='Login'/>

        <form
          onSubmit={this.handleSubmit}
          className='signup-form'>

          <label className="form-item" >Email</label>
          <input
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
            className="form-item"
            type='email'
            name='email'/>

          <label className="form-item" >Username</label>
          <input
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
            className="form-item"
            type='text'
            name='username'
            id="username" />

          <label className="form-item">Password</label>
          <input
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
            className="form-item"
            type='password'
            name='password'
            id="password" />

          <label className="form-item" >Profile Image</label>
          <input
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
            className="form-item"
            type='text'
            name='profileUrl'
            id="profileUrl"/>

          <input className="form-item" type='submit' name='Signup!' />
        </form>
        </div>
    )
  }
}

export default Signup
