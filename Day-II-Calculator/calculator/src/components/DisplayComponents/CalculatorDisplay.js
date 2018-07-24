import React from 'react';
import './Display.css';


const CalcuatorDisplay = (props) => {
 
    return (
      <div className="calc-display">
        {props.display}
      </div>
    );
  
}

export default CalcuatorDisplay;