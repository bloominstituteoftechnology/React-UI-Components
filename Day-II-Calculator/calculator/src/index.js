import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

class Button {
  constructor(element) {
    this.element = element;
    this.number = this.element.innerText;
    console.log(this.number);
  }
}

let numberButtons = document.querySelectorAll('.number');
// console.log(numberButtons);
numberButtons = Array.from(numberButtons).map(btn => new Button(btn));
