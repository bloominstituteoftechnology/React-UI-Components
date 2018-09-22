import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.value = props.value ? props.value : '0';
  }

  render() {
    return (
      <div className='calculator-display'>
        {this.value}
      </div>
    )
  }
}

export default CalculatorDisplay;
