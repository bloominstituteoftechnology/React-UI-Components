import React from 'react';
import './Display.css';
import './Display.css';
const CalculatorDisplay = (props) => {
    return (
        <div className="line display">
            <p>{props.text}</p>
        </div>
    )
}

CalculatorDisplay.defaultProps = { text: '0' }

/* trying to get the functionality of display working:
const string = this.props.data.join('')
    return <div className="Display"> {string} </div>
*/
export default CalculatorDisplay;