import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionBtn from '../ButtonComponents/ActionButton';




const CalculatorContainer = () => {
    return <div className="display-container">  
        {/* <div className={`display ${props.text}`}></div> */}
        <div className="cal-container"><NumberButton /> <ActionBtn /> </div>
        
    </div>
};

export default CalculatorContainer;
