import React from 'react';
import './NumberDisplay.css';

/*
    PASSABLE PROPS:
    number - Displays this number.
    operator - A string that is converted into an operator symbol.
        Supports "add", "subtract", "multiply", and "divide".
*/

class NumberDisplay extends React.Component {
    render() {
        let operator = "";
        if (this.props.operator) {
            switch (this.props.operator) {
                case "add":
                    operator = " +";
                    break;
                case "subtract":
                    operator = " -";
                    break;
                case "multiply":
                    operator = " ×";
                    break;
                case "divide":
                    operator = " ÷";
                    break;
                default:
                    break;
            }
        }

        return (
            <p className="number-display">
                {this.props.number + operator}
            </p>
        );
    }
}

export default NumberDisplay;
