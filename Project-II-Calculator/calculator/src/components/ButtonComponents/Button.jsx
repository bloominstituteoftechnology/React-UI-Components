import React from "react";
import "./Button.css";

// Buttons "-","+","*","/"  Logic is used to detect if the character being displayed is a number or not
const isOperator = val => {
    return !isNaN(val) || val ==="." || val === "=";
}

//Numbers 0-9 aswell as "." and "="
export const Button = props => (
    <div className={`button-wrapper ${
//JSX true/false statement: if isOperator is True return null, else add "operator"
       isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
    >
     {props.children}
  </div>
)


