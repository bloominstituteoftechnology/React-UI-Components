import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return(
        <div className="result">
            {props.result}
        </div>
    );
}

CalculatorDisplay.defaultProps = {
  result: "0"
};

export default CalculatorDisplay;