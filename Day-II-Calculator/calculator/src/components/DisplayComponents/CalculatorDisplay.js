import React from 'react';
import './Display.css';

class CalulatorDisplay extends React.Component {
    render() {
        return (
            <div className="calc-display">
            0
            </div>
        );
    }
    updateDisplay(newValue) {
        console.log(newValue);
        this.innerText = newValue;
    }
}

export default CalulatorDisplay;