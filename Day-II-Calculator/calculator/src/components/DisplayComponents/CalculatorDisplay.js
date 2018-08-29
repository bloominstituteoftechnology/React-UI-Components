import React from 'react';
import './Display.css';



const CalculatorDisplay = props => {
    return (

        <div className={props.displayProp}>{props.text}</div>

    );
};
CalculatorDisplay.defaultProps = {
      display: "0" 

} 

export default CalculatorDisplay;