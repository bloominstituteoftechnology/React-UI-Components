import React from "react";
import "./Button.css";
import { NumberButton } from "./NumberButton";
import { ActionButton } from "./ActionButton";
import { Display } from "../DisplayComponents/CalculatorDisplay";
import * as math from 'mathjs';

class NumberDisplay extends React.Component {
    constructor(props) {
        super(props)

        // Initilizing the state
        this.state = {
            input: ''
        }

    }
    // Adds the current input(text) from what ever button was clicked
    addToInput = val => {
    
        this.setState({ input: this.state.input + val })
    }
    // Added mathjs to do the calculations - this line takes what ever the input is and evaluates it.
    handleEqual = () => {
        this.setState({ input: math.eval(this.state.input) })
    }
    // Clear the Display
    handleClear = () => {
        this.setState({ input: '' })
    }

    render() {
        return <div>
            {/* Initilizing State to 0 on display */}
            <Display input={this.state.input} />

            <div>
              <ActionButton buttonStyle={`action`} handleClick={() => this.handleClear()} value={"clear"} text={"clear"} />
                <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } value={ "/" } text="&#247;"/>
            </div>

            <div>
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"7"} text={"7"} />
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"8"} text={"8"} />
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"9"} text={"9"} />
                <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } value={ "*" } text="&#215;" />
            </div>
            <div>
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"4"} text={"4"} />
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"5"} text={"5"} />
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"6"} text={"6"} />
                <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } value={ "-" } text="&#8722;"/>
            </div>
            <div>
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"1"} text={"1"} />
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"2"} text={"2"} />
              <NumberButton handleClick={this.addToInput} buttonStyle={`number`} value={"3"} text={"3"} />
                <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } value={ "+" } text="&#43;" />
            </div>
            <div>
              <ActionButton buttonStyle={"action"} handleClick={this.addToInput} value={"0"} text={"0"} />
              <NumberButton handleClick={() => this.handleEqual()} buttonStyle={"math"} value={"="} text="&#61;" />
            </div>
          </div>;
    }
}

export default NumberDisplay