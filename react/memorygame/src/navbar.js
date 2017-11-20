import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component{
  static defaultProps = {
    title: "Memory Game",
    newGame: "New Game"
  }
  render(){
    return(
      <div className="navbar">
        <div className="navitem">
          <p>{this.props.title}</p>
        </div>
        <div className="navitem">
          <p>{this.props.newGame}</p>
        </div>
      </div>
    )
  }
}

export default Navbar
