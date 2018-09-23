import React from "react";
import "./Button.css";
import { NumberButton } from "./NumberButton";
import ActionButton from "./ActionButton";
import { Display } from "../DisplayComponents/CalculatorDisplay";
import * as math from 'mathjs';

class NumberDisplay extends React.Component {
    constructor(props) {
        super(props)

        // Initilizing the state 
        this.state = {
            input: ""
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
        this.setState({ input: "" })
    }

    render() {
        return (
            <div>
                {/* Initilizing State to 0 on display */ }
                <Display input={ this.state.input } />

                <div>
                    <ActionButton buttonStyle={ `action` } handleClick={ () => this.handleClear() } text={ "clear" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } text={ "/" } />
                </div>

                <div>
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "7" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "8" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "9" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } text={ "*" } />
                </div>
                <div>
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "4" } value={ 4 } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "5" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "6" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } text={ "-" } />
                </div>
                <div>
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "1" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "2" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ `number` } text={ "3" } />
                    <NumberButton handleClick={ this.addToInput } buttonStyle={ "math" } text={ "+" } />
                </div>
                <div>
                    <ActionButton buttonStyle={ "action" } handleClick={ this.addToInput } text={ "0" } />
                    <NumberButton handleClick={ () => this.handleEqual() } buttonStyle={ "math" } text={ <i className="fas fa-equals" /> } />
                </div>

            </div>
        )
    }
}

export default NumberDisplay