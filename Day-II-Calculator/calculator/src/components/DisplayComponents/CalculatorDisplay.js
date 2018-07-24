import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';

class CalculatorDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: new NumberButton()};
    }

    render() {
        return (
          <div className={this.state.displaynumberStyle}>{this.state.text}</div>
        )
    }
}


export default CalculatorDisplay;