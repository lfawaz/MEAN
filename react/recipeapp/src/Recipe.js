import React, { Component } from 'react'

class Recipe extends Component{
  render () {
    const ingredients = this.props.ingredients.map((h, i) => (
      <li key={i}>{h}</li>
    ))
    return (

      <div>
      <img src={this.props.image} alt="spagetti here!"/>
      <h2>{this.props.text}</h2>

      <p>Ingredients:</p>
      <ul>
        {ingredients}
      </ul>

      <p>Instructions</p>
      <p>{this.props.instructions}</p>
      </div>
    )
  }
}

export default Recipe
