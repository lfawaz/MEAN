import React, { Component } from 'react'
import './box.css'


class Box extends Component {
  render() {
    let style = {}
    if(this.props.boxes.cardState !== 0){
      style.backgroundColor = this.props.boxes.backgroundColor
    }
  return(
      <div className="box-item" style={style}
      onClick={this.props.onClick}
      >

      </div>
    )
  }
}

export default Box
