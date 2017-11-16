import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe'
import Navbar from './navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">

          <Navbar title="Recipe App" item1="New Recipe" item2="Home" item3="About" item4="Contact US">

          </Navbar>

        </div>
        <div className="recipes-container">
          <div className="recipe-container">
            <Recipe
                text="Pasta"
                image="spaghetti.jpeg"
                ingredients ={['flour', 'tomates', 'water']}
                instructions = "Mix, cook, and eat"
            />
              </div>

              <div className="recipe-container">
            <Recipe
                text="Milk Shake"
                image="milkshake.jpeg"
                ingredients ={['milk', 'ice cream']}
                instructions = "Add Milk to ice cream, shake"
            />
              </div>
              <div className="recipe-container">
            <Recipe
                text="Avocado Toast"
                image="avocadotoast.jpeg"
                ingredients ={['avocado', 'toast']}
                instructions = "spread avocado on toast"
            />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
