import React from 'react';
import './Buttons.css';

const NumberButtons = (props) => {
  return (
    <div className="numbers">
      <div className={props.defaultRowClass}>
        <button className={`${props.defaultNumberClass} clear`}>clear</button>
      </div>

      <div className={props.defaultRowClass}>
        <button className={props.defaultNumberClass}>{props.text[0][0]}</button>
        <button className={props.defaultNumberClass}>{props.text[0][1]}</button>
        <button className={props.defaultNumberClass}>{props.text[0][2]}</button>
      </div>

      <div className={props.defaultRowClass}>
        <button className={props.defaultNumberClass}>{props.text[1][0]}</button>
        <button className={props.defaultNumberClass}>{props.text[1][1]}</button>
        <button className={props.defaultNumberClass}>{props.text[1][2]}</button>
      </div>

      <div className={props.defaultRowClass}>
        <button className={props.defaultNumberClass}>{props.text[2][0]}</button>
        <button className={props.defaultNumberClass}>{props.text[2][1]}</button>
        <button className={props.defaultNumberClass}>{props.text[2][2]}</button>
      </div>

      <div className={props.defaultRowClass}>
        <button className={`${props.defaultNumberClass} zero`}>0</button>
      </div>
    </div>
  );
};

NumberButtons.defaultProps = {
  defaultNumberClass: 'number',
  defaultRowClass: 'number-row',
  text: [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3']
  ]
};

export default NumberButtons;