import React from 'react';
import CalculationDisplay from "./CalculationDisplay.js";
import ButtonDisplay from "./ButtonDisplay.js";

class Display extends React.Component {

    render() {
        return (
          <div className="display">
            <CalculationDisplay total={this.props.total} />
            <ButtonDisplay buttons={this.props.buttons} operators={this.props.operators} handleChange={this.props.handleChange} />
          </div>
        );
    }
}

export default Display;
