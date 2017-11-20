import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {

  render(){
    const RecipeList = this.props.recipes.map((value)=>(
      <Recipe key={value.id} className='recipe-container'
        {...value}
        />
    ))
    return(
     <div className='recipes-container'>
      {RecipeList}
      </div>
    )
  }
}

export default RecipeList
