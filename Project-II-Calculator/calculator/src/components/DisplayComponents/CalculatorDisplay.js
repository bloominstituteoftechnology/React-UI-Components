import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
  render() {
    return (
      <div className='calculator-display'>
        <div className='num-display'>{this.props.input}</div>
      </div>
    );
  }
}

export default CalculatorDisplay;
