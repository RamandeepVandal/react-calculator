import React, { Component, useState } from 'react';
import './App.css';
import * as math from 'mathjs';

// components
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';
import { ClearEntry } from './components/ClearEntry';

function App() {

  // input state
  let [input, setInput] = useState("");

  // concatenate string -> input -> create an expression
  const concatInput = (x) => {
    setInput(input = input + x);
  }

  // evaluate the expression
  const evaluateExpression = () => {
    setInput(input = math.evaluate(input));
  }

  // clear the input
  const clearInput = () => {
    setInput(input = "");
  }

  // delete the input -> by 1 character
  const deleteInput = () => {
    setInput(input.substring(0, input.length - 1));
  }

    return (
      <div className="App">
        <div className="calculator-wrapper">
          <h1>Calculator</h1>
          <Input>{input}</Input>
          <div className="row">
            <Buttons handleClick={concatInput}>7</Buttons>
            <Buttons handleClick={concatInput}>8</Buttons>
            <Buttons handleClick={concatInput}>9</Buttons>
            <Buttons handleClick={concatInput}>/</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={concatInput}>4</Buttons>
            <Buttons handleClick={concatInput}>5</Buttons>
            <Buttons handleClick={concatInput}>6</Buttons>
            <Buttons handleClick={concatInput}>*</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={concatInput}>1</Buttons>
            <Buttons handleClick={concatInput}>2</Buttons>
            <Buttons handleClick={concatInput}>3</Buttons>
            <Buttons handleClick={concatInput}>-</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={concatInput}>0</Buttons>
            <Buttons handleClick={concatInput}>.</Buttons>
            <Buttons handleClick={() => evaluateExpression()}>=</Buttons>
            <Buttons handleClick={concatInput}>+</Buttons>
          </div>
          <div className="row">
            <ClearEntry handleClear={() => clearInput()}>Clear</ClearEntry>
            <Buttons handleClick={() => deleteInput()}>Del</Buttons>
          </div>
        </div>
      </div>
    );
  }

export default App;