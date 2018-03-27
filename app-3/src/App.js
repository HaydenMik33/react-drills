import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }
handleChange(filter){
  this.setState({filterString : filter})
}
  render() {
    const {foods,filterString} = this.state;
    let foodsTodisplay = foods.filter((el,i)=>{
        return el.includes(filterString)
    }).map((el,i)=>{return (
      <h2 key ={i}>{el}</h2>
    )})
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
     
      <input
      onChange ={(e)=>{this.handleChange(e.target.value)}}
      type ="text"
      />
      {foodsTodisplay}
       </div>
    );
  }
}

export default App;
