import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'
import Box from './box'

const numOfBoxes = 16

const cardState = {
  Hiding: 0,
  Showing: 1,
  Matching: 2
}
class App extends Component {
  constructor(props){
    super(props);
    const Boxes = this.assignColors()
    this.state = {Boxes}
    this.handleClick = this.handleClick.bind(this)
    setInterval(this.hideVisibleCards.bind(this), 3000)
    this.resetGame = this.resetGame.bind(this)
  }

 // matchTwoVisibleCards(){
 //   const Boxes = this.state.Boxes.slice()
 //
 //   for (var i = 0; i < Boxes.length; i++) {
 //     if(Boxes[i].cardState === 1){
 //       const color = Boxes[i].backgroundColor
 //       const id = Boxes[i].id
 //       const otherBoxIndex = Boxes.findIndex(card=> card.backgroundColor === color && card.id !== id)
 //       if(Boxes[otherBoxIndex].cardState === 1){
 //         Boxes[i].cardState = 2
 //         Boxes[otherBoxIndex].cardState = 2
 //       }
 //     }
 //   }
 //   this.setState({Boxes})
 // }

 resetGame(){
    const Boxes = this.assignColors()
    this.setState({Boxes})

 }

 hideVisibleCards(){
   const Boxes = this.state.Boxes.slice()
   const hideBoxes = Boxes.map(card => {
     card.id = card.id
     if(card.cardState === 1){
       card.cardState = 0
     }
     card.backgroundColor = card.backgroundColor
     return card
   })
   this.setState({hideBoxes})
 }

 handleClick(id){
   const Boxes = this.state.Boxes.slice()
   const clickedCardIndex = Boxes.findIndex(card => card.id === id)
   if(Boxes[clickedCardIndex].cardState === 0){
     Boxes[clickedCardIndex].cardState = 1
     const color = Boxes[clickedCardIndex].backgroundColor
     const id = Boxes[clickedCardIndex].id
     const otherBoxIndex = Boxes.findIndex(card=> card.backgroundColor === color && card.id !== id)
     if(Boxes[otherBoxIndex].cardState === 1){
       Boxes[clickedCardIndex].cardState = 2
       Boxes[otherBoxIndex].cardState = 2
       
     }
   }if(Boxes[clickedCardIndex.cardState === 1]){
     Boxes[clickedCardIndex].cardState = 0
   }
   this.setState({Boxes})
 }

 assignColors(){
   const Boxes = Array(numOfBoxes).fill()
   const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Cyan', 'DarkBlue']

   while(Boxes.indexOf(undefined) !== -1){


     for (var i = 0; i < Boxes.length; i++) {
       const randColorIndex = Math.floor(Math.random() * 8)
       const color = colors[randColorIndex]
       const colorCount = Boxes.reduce((accu, nextValue)=>{
                            if(accu[nextValue] === undefined){
                               accu[nextValue] = 1
                           }
                           else{
                             accu[nextValue] += 1
                           }
                           return accu
                         },{})[color]
      if(colorCount > 1){
         continue;
       }
     else{
        Boxes[i] = color

     }
     }



   }


   return Boxes.reduce((accu, nextValue, index) => {
     accu.push({'id': index, 'cardState': cardState.Hiding, 'backgroundColor': nextValue})
     return accu
   },[])
 }

  render() {
     const Boxes = this.state.Boxes.map((value, index) => (
       <Box key={value.id} boxes={value} onClick={() => this.handleClick(value.id)} />
     ))
    return (
      <div className="App">
        <Navbar onClick={() => this.resetGame()}/>
        <div className="boxes-container">
        {Boxes}
        </div>
      </div>
    );
  }
}

export default App;
