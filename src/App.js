import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    dice: 6,
  };
  changeDice = () => {
    const diceValue = Math.floor(Math.random() * 6 + 1);
    this.setState({
      dice: diceValue,
    });
  };
  render() {
    return (
      <div className="App">
        <div className="Container">
          <div className="DiceContainer">
            <img
              className="Dice"
              src={require(`./DiceImages/dice${this.state.dice}.png`)}
              alt="dice"
            />
          </div>
          <div className="diceBtnContainer">
            <button onClick={this.changeDice} className="diceBtn">
              Let's Play
            </button>
          </div>
        </div>
      </div>
    );
  }
}
