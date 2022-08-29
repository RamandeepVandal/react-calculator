import React, { Component } from 'react';
import './App.css';
import * as math from 'mathjs';

// components
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';
import { ClearEntry } from './components/ClearEntry';

class App extends Component {

  // input state
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }
  }

  // concatenate string -> input -> create an expression
  concatInput = (x) => {
    this.setState({ input: this.state.input + x });
  }

  // evaluate the expression
  evaluateExpression = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  }

  // clear the input
  clearInput = () => {
    this.setState({ input: "" });
  }

  // delete the input
  deleteInput = () => {
    this.setState({ input: this.state.input.substring(0, this.state.input.length - 1)});
  }

  render() {
    return (
      <div className="App">
        <div class="calculator-wrapper">
          <h1>Calculator</h1>
          <Input>{this.state.input}</Input>
          <div class="row">
            <Buttons handleClick={this.concatInput}>7</Buttons>
            <Buttons handleClick={this.concatInput}>8</Buttons>
            <Buttons handleClick={this.concatInput}>9</Buttons>
            <Buttons handleClick={this.concatInput}>/</Buttons>
          </div>
          <div class="row">
            <Buttons handleClick={this.concatInput}>4</Buttons>
            <Buttons handleClick={this.concatInput}>5</Buttons>
            <Buttons handleClick={this.concatInput}>6</Buttons>
            <Buttons handleClick={this.concatInput}>*</Buttons>
          </div>
          <div class="row">
            <Buttons handleClick={this.concatInput}>1</Buttons>
            <Buttons handleClick={this.concatInput}>2</Buttons>
            <Buttons handleClick={this.concatInput}>3</Buttons>
            <Buttons handleClick={this.concatInput}>-</Buttons>
          </div>
          <div class="row">
            <Buttons handleClick={this.concatInput}>0</Buttons>
            <Buttons handleClick={this.concatInput}>.</Buttons>
            <Buttons handleClick={() => this.evaluateExpression()}>=</Buttons>
            <Buttons handleClick={this.concatInput}>+</Buttons>
          </div>
          <div class="row">
            <ClearEntry handleClear={() => this.clearInput()}>Clear</ClearEntry>
            <Buttons handleClick={() => this.deleteInput()}>Del</Buttons>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
