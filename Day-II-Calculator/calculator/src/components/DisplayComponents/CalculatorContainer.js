import React from 'react';
import './Display.css';
import CalculatorDisplay from "./CalculatorDisplay";
import ActionButton from "../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";


const CalculatorContainer = () => {
    return (
     
        <div className="calculatorWrapper">
            <CalculatorDisplay />
            <ActionButton />
            <NumberButton />
          
        </div> 
     
    );
}



export default CalculatorContainer;