import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
    return (
        <div class='container'>
        <div class='display'><CalculatorDisplay buttonText='0'  /></div>
        <div class="clear"><ClearButton buttonText="clear" /></div>
        
       <div class='buttons'>
       <NumberButton buttonText='9' />
       <NumberButton buttonText='8' />
       <NumberButton buttonText='7' />
       <NumberButton buttonText='6' />
       <NumberButton buttonText='5' />
       <NumberButton buttonText='4' />
       <NumberButton buttonText='3' /> 
       <NumberButton buttonText='2' />
       <NumberButton buttonText='1' />
       </div>
       
       <div class="clear"><ClearButton buttonText="0" /></div>

        <div class='ActionButton'>
        <ActionButton buttonText= '÷' />
        <ActionButton buttonText= '*' />
        <ActionButton buttonText= '-' />
        <ActionButton buttonText= '+' />
        <ActionButton buttonText= '=' />

        
        
        
        </div>
        
        
        
        </div>
    )
}
export default App;
