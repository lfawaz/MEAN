import React, { Component } from 'react'


class Hobbies extends Component {
  render(){
    const hobbies = ['Hobby1', 'Hobby2', 'Hobby 3', 'Hobby 4']

    return(
      <ul>
        {hobbies.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    )
  }
}

export default Hobbies
