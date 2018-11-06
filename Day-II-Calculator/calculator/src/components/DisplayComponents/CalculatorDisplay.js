import React, { Component } from 'react';
import './Display.css';

class CalculatorDisplay extends Component {

    state = {
        initialValue: 0
    }



    render() {
        return (
            <div className="calculator-display"><span>{this.state.initialValue}</span></div>
          );
    }

  }


  
  export default CalculatorDisplay;
