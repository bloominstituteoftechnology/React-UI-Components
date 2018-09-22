import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
     }

  render() {
    const str = this.props.data.join('');
    return (
      <div className='showDat'>
        <p> {str}</p>
      </div>
    );
  }
}

export default CalculatorDisplay;