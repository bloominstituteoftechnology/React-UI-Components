import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
     <a href= 'https://www.google.com/search?q=google+calculator&rlz=1C5CHFA_enUS752US752&oq=google+calculator&aqs=chrome.0.0l6.2811j1j4&sourceid=chrome&ie=UTF-8' target= '_blank'>
      <div className="container">
        <CalculatorDisplay displayStyle= 'calculator-display'text= '0' />
        <div className= 'number-pad'> 
          <NumberButton buttonStyle='number-button clear' text= 'clear' />
          <NumberButton buttonStyle='number-button' text= '7' />
          <NumberButton buttonStyle='number-button' text= '8' />
          <NumberButton buttonStyle='number-button' text= '9' />
          <NumberButton buttonStyle='number-button' text= '4' />
          <NumberButton buttonStyle='number-button' text= '5' />
          <NumberButton buttonStyle='number-button' text= '6' />
          <NumberButton buttonStyle='number-button' text= '1' />
          <NumberButton buttonStyle='number-button' text= '2' />
          <NumberButton buttonStyle='number-button' text= '3' />
          <NumberButton buttonStyle='number-button zero' text= '0' /> 
        </div>     
        <div className="action-buttons">
          <ActionButton buttonStyle='action-button' text= '÷' />
          <ActionButton buttonStyle='action-button' text= '×' />
          <ActionButton buttonStyle='action-button' text= '–' />
          <ActionButton buttonStyle='action-button' text= '+' />
          <ActionButton buttonStyle='action-button' text= '=' />
        </div>  
      </div>
    </a>
  );
};

export default App;