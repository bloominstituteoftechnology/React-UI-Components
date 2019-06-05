import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import Operators from './components/ButtonComponents/Operators';
import ActionButtons from './components/ButtonComponents/ActionButton';


const numbers = [
  {text: '1', num: 1, buttonStyle: 'button'},
  {text: '2', num: 2, buttonStyle: 'button'},
  {text: '3', num: 3, buttonStyle: 'button'},
  {text: '4', num: 4, buttonStyle: 'button'},
  {text: '5', num: 5, buttonStyle: 'button'},
  {text: '6', num: 6, buttonStyle: 'button'},
  {text: '7', num: 7, buttonStyle: 'button'},
  {text: '8', num: 8, buttonStyle: 'button'},
  {text: '9', num: 9, buttonStyle: 'button'}
];

const operators = [
  {operator: '/', icon: 'divide'},
  {operator: '*', icon: 'times'},
  {operator: '+', icon: 'plus'},
  {operator: '-', icon: 'minus'}
]


const App = () => {
  return (
    <div className="app-container">
      <h3>Welcome to React Calculator</h3>
      <Display />
      <div className='input-container'>
        <div className="numbers-container">
          <ActionButtons name='Clear' />
          {numbers.map(function (numbtn)  {
            return <NumberButton num={numbtn} />;
          })}
          <ActionButtons name='0' />
        </div>
        <div className='operators-container'>
          {operators.map(function (operator) {
            return <Operators opr={operator} />
          })}
        </div>
        
        
      </div>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
