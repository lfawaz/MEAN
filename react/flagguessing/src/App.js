import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: '',
      answer: '',
      options: ['France','Germany','Italy','Spain']

    }
  }

  componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(data => data.json())
    .then(data =>  {
      console.log(data)
      const countryIndex = Math.floor(Math.random() * data.length)
      const flag = data[countryIndex].flag
      const answer = data[countryIndex].name
      let options = [answer]
      for (var i = 0; i < 3; i++) {
        const otherIndex = Math.floor(Math.random() * data.length)
        options.push(data[otherIndex].name)
      }
      this.setState({flag, answer, options})
    })
  }
  render() {
    return (
      <div className="App">
      <form onSubmit={(e) => console.log(e)}>
      <input type='radio' name='country' value={this.state.options[0]}/>{this.state.options[0]}
      <input type='radio' name='country' value={this.state.options[1]}/>{this.state.options[1]}
      <input type='radio' name='country' value={this.state.options[2]}/>{this.state.options[2]}
      <input type='radio' name='country' value={this.state.options[3]}/>{this.state.options[3]}
      <input type='submit' value='Guess'/>

      </form>
      <img src={this.state.flag} alt="This should be a flag"/>

      </div>
    );
  }
}

export default App;
