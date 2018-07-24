import React from 'react';
import './Display.css';


class CalcuatorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="calc-display">
        0 / 30
      </div>
    );
  }
}

export default CalcuatorDisplay;