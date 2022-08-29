import React from "react";
import './Buttons.css';

// check if the button is number or operator
const isOperator = (x) => {
  return !isNaN(x) || x === "." || x === "=" || x === "(" || x === ")";
};

export const Buttons = (props) => {
  return (
    <div
      className={`num-btn ${isOperator(props.children) ? null : "operator-btn"}`}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
};
