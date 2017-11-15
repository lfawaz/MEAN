import React, { Component } from 'react'
import './Pet.css'
import Hobbies from './Hobbies'

class Pet extends Component {
  render () {
    return (
      <div className="card">
      <h2>Moxie the Cat</h2>
      <img
        src="https://github.com/tigarcia/Moxie/blob/master/moxie.png"
        alt="Alt Text"
        />
      <h3>Hobbies list</h3>
      <Hobbies />
      </div>
    )
  }
}

export default Pet
