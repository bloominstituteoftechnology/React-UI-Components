import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const math = require('mathjs');


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["÷", "×", "-", "+", "="];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      operations: [],
      result: 0
    }
  }

  handleClick = event => {
    console.log(event.target.getAttribute('data-value'));
    const operation = event.target.getAttribute('data-value');

    switch(operation) {
      case 'clear':
        this.setState({
          operations: [],
        });
        break;

      case '=':
        this.calculate();
        break;

      default:
        this.setState({
          operations: [
            ...this.state.operations,
            operation
          ]
        });
    }
  }

  calculate = () => {
    console.log(this.state.operations.join(''));
    let result = this.state.operations.join('');

    if (result) {result = math.eval(result)};

    console.log(result);
  }

  render() {
    return (
      <div className='calculator-container'>
        <CalculatorDisplay result={this.state.result} />
        <div className='buttons-container'>
          <div className='numbers-container'>
            <ActionButton 
              text='clear'
              dataValue='clear'
              handleClick={this.handleClick} />
            {numbers.map(number => {
              return <NumberButton
                text={number}
                className='btn btn-number'
                key={number} 
                dataValue={number}
                handleClick={this.handleClick} />
            })}
            <ActionButton 
              text='0'
              dataValue='0'
              handleClick={this.handleClick} />
          </div>
          <div className='symbols-container'>
            {operators.map(operator => {
              return <NumberButton
                text={operator}
                className='btn btn-operator'
                key={operator}
                dataValue={operator}
                handleClick={this.handleClick} />
            })}
          </div>
        </div>

      </div>
    );
  }

};

export default App;
