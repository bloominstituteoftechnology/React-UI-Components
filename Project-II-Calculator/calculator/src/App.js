import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';


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


const App = () => {
  return (
    <div className="app-container">
      <h3>Welcome to React Calculator</h3>
      <Display />
      <div className="numbers-container">
        {numbers.map(function (numbtn)  {
          return <NumberButton num={numbtn} />;
        })}
          
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
