import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'
import Box from './box'

const numOfBoxes = 16


class App extends Component {
  constructor(props){
    super(props);
    const Boxes = this.assignColors()
    console.log(Boxes)
    this.state = {Boxes}
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

   // console.log(Boxes.reduce((accu, nextValue)=>{
   //                      if(accu[nextValue] === undefined){
   //                         accu[nextValue] = 1
   //                     }
   //                     else{
   //                       accu[nextValue] += 1
   //                     }
   //                     return accu
   //                   },{}))
   //console.log(Boxes)
   // console.log(Boxes.reduce((accu, nextValue, index) => {
   //   accu.push({'id': index, 'backgroundColor': nextValue})
   //   return accu
   // },[]))
   //
   return Boxes.reduce((accu, nextValue, index) => {
     accu.push({'id': index, 'backgroundColor': nextValue})
     return accu
   },[])
 }

  render() {
     const Boxes = this.state.Boxes.map((value, index) => (
       <Box key={value.id} boxes={value} />
     ))
    return (
      <div className="App">
        <Navbar />
        <div className="boxes-container">
        {Boxes}
        </div>
      </div>
    );
  }
}

export default App;
