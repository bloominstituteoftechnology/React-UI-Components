import React from 'react';
import './Display.css';
import './Display.css';
const CalculatorDisplay = (props) => {
    return (
        <p>{props.text}</p>
    )
}

CalculatorDisplay.defaultProps = { text: '0' }

/* 
const string = this.props.data.join('')
    return <div className="Display"> {string} </div>
*/
export default CalculatorDisplay;