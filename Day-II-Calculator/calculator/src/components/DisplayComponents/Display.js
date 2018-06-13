import React from 'react';
import CalculationDisplay from "./CalculationDisplay.js";
import ButtonDisplay from "./ButtonDisplay.js";

class Display extends React.Component {

    constructor(props) {
        super(props);
        this.value = props.total;
        this.buttons = props.buttons;
        this.operators = props.operators;
        this.handleChange = props.handleChange;
    }

    render() {
        return (
          <div className="display">
            <CalculationDisplay value={this.value} />
            <ButtonDisplay buttons={this.buttons} operators={this.operators} handleChange={this.handleChange} />
          </div>
        );
    }
}

export default Display;
