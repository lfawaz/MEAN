import React, { Component } from 'react'
import './box.css'


class Box extends Component {
  render() {
  return(
      <div className="box-item"
      onClick = {(e) => (style={{backgroundColor: this.props.boxes.backgroundColor}})}
      >

      </div>
    )
  }
}

export default Box
