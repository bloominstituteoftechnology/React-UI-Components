import React from 'react';
import './App.css';
import {NumberButton} from './components/ButtonComponents/NumberButton'
import {ActionButton} from './components/ButtonComponents/ActionButton'
import {Clear} from './components/ButtonComponents/Clear'
import {CalculatorDisplay} from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
    
  return (
    <div>
        <div className="btnContainer">
            <CalculatorDisplay />
            <div className = "flex">
                <div className="numContainer">
                    <Clear />
                    <NumberButton />
                </div>
                <div className="symContainer">
                    <ActionButton />
                </div>
            </div>
        </div> 
    </div>
      
  );
};

export default App;
