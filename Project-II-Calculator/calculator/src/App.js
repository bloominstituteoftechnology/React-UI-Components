import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className='calcBody'>
        <CalculatorDisplay displayStyle='display' />
        <div>
            <ActionButton buttonStyle='clearButton' text='clear'/>
            <NumberButton buttonStyle='redButton' text='/'/>
        </div>
        <div>
            <NumberButton buttonStyle='whiteButton' text='7' />
            <NumberButton buttonStyle='whiteButton' text='8' />
            <NumberButton buttonStyle='whiteButton' text='9' />
            <NumberButton buttonStyle='redButton' text='X' />
        </div>
        <div>
            <NumberButton buttonStyle='whiteButton' text='4' />
            <NumberButton buttonStyle='whiteButton' text='5' />
            <NumberButton buttonStyle='whiteButton' text='6' />
            <NumberButton buttonStyle='redButton' text='-' />
        </div>
        <div>
            <NumberButton buttonStyle='whiteButton' text='1' />
            <NumberButton buttonStyle='whiteButton' text='2' />
            <NumberButton buttonStyle='whiteButton' text='3' />
            <NumberButton buttonStyle='redButton' text='+' />
        </div>
        <div>
            <ActionButton buttonStyle='zeroButton' text='0'/>
            <NumberButton buttonStyle='redButton' text='='/>
        </div>
    </div>
  );
};

export default App;
