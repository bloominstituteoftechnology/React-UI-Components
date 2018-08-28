import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
// import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer.js';
import SquareButton from './components/ButtonComponents/SquareButton.js';
import RectangleButton from './components/ButtonComponents/RectangleButton.js';

const App = () => {
  return (
    <div className='calc-container'>
      <CalculatorDisplay />

      <div className='num-buttons-container'>
        <RectangleButton buttonStyle='rec-button' text='clear'/>
        <SquareButton buttonStyle='num-button' text='7' />
        <SquareButton buttonStyle='num-button' text='8' />
        <SquareButton buttonStyle='num-button' text='9' />
        <SquareButton buttonStyle='num-button' text='4' />
        <SquareButton buttonStyle='num-button' text='5' />
        <SquareButton buttonStyle='num-button' text='6' />
        <SquareButton buttonStyle='num-button' text='1' />
        <SquareButton buttonStyle='num-button' text='2' />
        <SquareButton buttonStyle='num-button' text='3' />
        <SquareButton buttonStyle='rec-button' text='0' />
      </div>
      <div className='op-buttons-container'>
        <SquareButton buttonStyle='op-button' text='&#247;' />
        <SquareButton buttonStyle='op-button' text='&#10005;' />
        <SquareButton buttonStyle='op-button' text='–' />
        <SquareButton buttonStyle='op-button' text='+' />
        <SquareButton buttonStyle='op-button' text='=' />
      </div>
    </div>
    
  );
};

export default App;
