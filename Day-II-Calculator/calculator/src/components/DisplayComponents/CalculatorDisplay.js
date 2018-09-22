import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentDisplay: 0};
        this.currentDisplay = props.currentDisplay;
    }
    
    render () {
        return (
    <div className='calculator-display'>
        <p>{this.props.currentDisplay}</p>
    </div>
        );
    }
}

export default CalculatorDisplay;