import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

let displayText = '0';
let displayMath = '';
let display = document.querySelector('.display-screen');
display.innerText = displayText;

class NumberButton {
  constructor(element) {
    this.element = element;
    this.text = this.element.innerText;
    this.click = this.element.addEventListener('click', () => {
      if (displayText === '0') {
        displayText = this.text;
        displayMath = this.text;
        display.innerText = displayText;
      } else {
        displayText += this.text;
        displayMath += this.text;
        display.innerText = displayText;
      }
      console.log(displayText);
    });
  }
}

class SymbolButton {
  constructor(element) {
    this.element = element;
    this.text = this.element.innerText;
    this.operator = this.element.dataset.operator;
    this.click = this.element.addEventListener('click', () => {
      if (this.text === '=') {
        const doMath = () => {
          return eval(displayMath).toFixed(3);
        };
        display.innerText = doMath();
        displayText = display.innerText;
        displayMath = display.innerText;
      } else {
        displayText += this.text;
        displayMath += this.operator;
        display.innerText = displayText;
        console.log(this.operator);
      }
    });
  }
}

class ClearButton {
  constructor(element) {
    this.element = element;
    this.click = this.element.addEventListener('click', () => {
      displayText = '0';
      displayMath = '';
      display.innerText = displayText;
    });
  }
}

let numberButtons = document.querySelectorAll('.number');
// console.log(numberButtons);
numberButtons = Array.from(numberButtons).map(btn => new NumberButton(btn));

let symbolButtons = document.querySelectorAll('.symbol');
symbolButtons = Array.from(symbolButtons).map(btn => new SymbolButton(btn));
// console.log(symbolButtons);

let clearButton = document.querySelectorAll('.action-button');
clearButton = Array.from(clearButton).map(btn => {
  if (btn.innerText === 'clear') {
    new ClearButton(btn);
  }
});
