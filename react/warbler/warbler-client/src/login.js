import React, { Component } from 'react'
import './login.css'
import Navbar from './navbar'

class Login extends Component {
  render(){
    return(
      <div className="div-form">
      <Navbar text="Signup"/>
      <form className='login-form'>
        <label className='form-item'>Username</label>
        <input className='form-item' type='text' />

        <label className='form-item'>Password</label>
        <input className='form-item' type='password' />

        <input type="submit" value="Login" />
      </form>
      </div>
    )
  }
}

export default Login
