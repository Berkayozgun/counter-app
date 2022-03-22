import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter : 0
    }
  }
  render() {
    return (
      <div className="App">

        <p className="status">
          Counter status :
        </p>

        <p className="number">
          {this.state.counter}
          </p>


        <button 
                className="plus"
                onClick={()=>{this.setState({counter:this.state.counter+1})}}>
          +
        </button>

        <button
          className="reset"
          onClick={()=>{this.setState({counter:0})}}>
          Reset
        </button>


      </div>
    );
  }
}