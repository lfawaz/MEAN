import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json'
    const storyDetails = 'https://hacker-news.firebaseio.com/v0/item/'

    fetch(topStories)
     .then(data => data.json())
     .then(data => data.map(element => {
       const url = `${storyDetails}${element}.json`
       return fetch(url)
        .then(data => data.json())
     }))
     .then(promises => Promise.all(promises))
     .then(stories => this.setState({stories}))
  }

  render() {
    let views = <div>Loading...</div>
    const {stories} = this.state
    if(stories && stories.length > 0){
      console.log('fetching')
      views = stories.map(s => (
        <p key={s.id}>
        <a href={s.url}>{s.title} by <strong>{s.by}</strong></a>
        </p>
      ))
    }
    return (
      <div className="App">
        <h2>Hacker News Top Stories</h2>
        {views}

      </div>
    );
  }
}

export default App;
