import React, { Component } from 'react'
import './navbar.css'


class Navbar extends Component {
  render(){
    return(
      <div className="navbar">
      <div className='title'>
      <p>{this.props.title}</p>
      </div>
      <div className="menu">
        <p>{this.props.item1}</p>
        <p>{this.props.item2}</p>
        <p>{this.props.item3}</p>
        <p>{this.props.item4}</p>
      </div>
      </div>

    )
  }
}


export default Navbar
