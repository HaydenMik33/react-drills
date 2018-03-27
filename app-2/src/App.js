import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      foods:[
        "spaghetti",
         "ice cream",
         "sushi",
         "cheese"
      ]
    };
  }
  render() {
    let foodsToDisplay = this.state.foods.map((el,i)=>{
      return (
        <h2 key={i}>
        {el}
        </h2>
      )
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
