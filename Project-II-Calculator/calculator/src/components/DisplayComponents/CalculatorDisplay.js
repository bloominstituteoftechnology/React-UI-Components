import React from 'react';
import './Display.css';

export class CalculatorDisplay extends React.Component {
    render() {
        const text = (this.props.text)
        
        return (
                <div className="dis">
                    {text}
                </div>  
        );
    }
}

CalculatorDisplay.defaultProps = {text: 0}