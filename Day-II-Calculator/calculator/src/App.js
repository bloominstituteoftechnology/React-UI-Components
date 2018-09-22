import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import CalculatorContainer from './components/ButtonComponents/CalculatorContainer.js'

const App = () => {
  return (
    <div className="CalculatorContainer">
      <div className="NumberButtonContainer">
        <NumberButton buttonStyle={'number'} text={'7'} />
        <NumberButton buttonStyle={'number'} text={'8'} />
        <NumberButton buttonStyle={'number'} text={'9'} />
        <NumberButton buttonStyle={'number'} text={'4'} />
        <NumberButton buttonStyle={'number'} text={'5'} />
        <NumberButton buttonStyle={'number'} text={'6'} />
        <NumberButton buttonStyle={'number'} text={'1'} />
        <NumberButton buttonStyle={'number'} text={'2'} />
        <NumberButton buttonStyle={'number'} text={'3'} />
      </div>
      <div className="ActionBttonContainer">
        <ActionButton buttonStyle={'number'} text={'/'} />
        <ActionButton buttonStyle={'number'} text={'*'} />
        <ActionButton buttonStyle={'number'} text={'-'} />
        <ActionButton buttonStyle={'number'} text={'+'} />
      </div>
      <div className="CalculatorContainer">
      <CalculatorContainer />


      </div>






    </div>
  );
};

export default App;
