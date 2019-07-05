import React from 'react';
import './Display.css';

export class CalculatorDisplay extends React.Component {
    state = {
        clicked: [
            {result: 0}
        ]
    }

    render() {
        return (
                <div className="display">
                <div className="dis">
                    {this.state.clicked[0].result}
                </div>  
            </div> 
        );
    }
}