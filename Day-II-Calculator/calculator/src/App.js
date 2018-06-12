import React from 'react';
import './App.css';

function NumberButton(props) {
  return <button className={props.buttonStyle}>{props.text}</button>
}

function ActionButton(props) {
  return <button className={props.buttonStyle}>{props.text}</button>
}

const App = () => {
  return (
    <div className="calc-wrapper">
      <div className="display">0</div>
      <div className="buttons-wrapper">
        <ActionButton buttonStyle="action-button" text="Clear"/>
        <NumberButton buttonStyle="calculation-button" text='&#247;'/>
        <NumberButton buttonStyle="number-button" text='7'/>
        <NumberButton buttonStyle="number-button" text='8'/>
        <NumberButton buttonStyle="number-button" text='9'/>
        <NumberButton buttonStyle="calculation-button" text='&#215;'/>
        <NumberButton buttonStyle="number-button" text='4'/>
        <NumberButton buttonStyle="number-button" text='5'/>
        <NumberButton buttonStyle="number-button" text='6'/>
        <NumberButton buttonStyle="calculation-button" text='&#8722;'/>
        <NumberButton buttonStyle="number-button" text='1'/>
        <NumberButton buttonStyle="number-button" text='2'/>
        <NumberButton buttonStyle="number-button" text='3'/>
        <NumberButton buttonStyle="calculation-button" text='&#43;'/>
        <ActionButton buttonStyle="action-button" text="0"/>
        <NumberButton buttonStyle="calculation-button" text='&#61;'/>
      </div>
    </div>
  );
};

export default App;
