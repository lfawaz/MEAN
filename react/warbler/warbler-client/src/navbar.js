import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {
  render(){
    return (
      <div className='navbar-container'>
        <h3>Warlber</h3>
        <div className='login-signup'>
          <p>{this.props.text}</p>

        </div>
      </div>
    )
  }
}

export default Navbar
