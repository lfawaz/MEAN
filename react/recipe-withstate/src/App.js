import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar'
import RecipeList from './RecipeList'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        recipes:[
          {
            id: 1,
            text: "Pasta",
            image: "spaghetti.jpeg",
            ingredients: ['flour', 'tomates', 'water'],
            instructions: "Mix, cook, and eat"
          },
          {
            id: 2,
            text: "Milk Shake",
            image: "milkshake.jpeg",
            ingredients: ['milk', 'ice cream'],
            instructions: "Add Milk to ice cream, shake"
          },
          {
          id: 3,
          text:"Avocado Toast",
          image: "avocadotoast.jpeg",
          ingredients: ['avocado', 'toast'],
          instructions: "spread avocado on toast"
        }
      ],
      nextRecipeId: 4
      }
  }
  render() {
    return (
      <div className="App">
          <Navbar title="Recipe App" item1="New Recipe" item2="Home" item3="About" item4="Contact US"/>
          <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
