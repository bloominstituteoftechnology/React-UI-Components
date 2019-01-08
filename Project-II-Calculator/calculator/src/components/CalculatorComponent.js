import React from 'react';
import NumberDisplay from './DisplayComponents/NumberDisplay';
import Button from './ButtonComponents/Button';

import './Calculator.css';

class Calculator extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            mainDisplay: 0,
            cache: null
        }
    }

    pushDigit(digit) {
        let newState = this.state;

        if (newState.mainDisplay === "Error")
            newState.mainDisplay = 0;

        newState.mainDisplay *= 10;
        newState.mainDisplay += digit;
        this.setState(newState);
    }

    clear() {
        let newState = this.state;

        if (newState.mainDisplay === 0) {
            newState.cache = null;
        } else {
            newState.mainDisplay = 0;
        }

        this.setState(newState);
    }

    pushOperator(operator) {
        let newState = this.state;

        if (newState.cache) {
            newState.cache.operator = operator;
        } else {
            if (newState.mainDisplay === "Error")
                newState.mainDisplay = 0;

            newState.cache = {
                number: newState.mainDisplay,
                operator: operator
            };
            newState.mainDisplay = 0;
        }
        this.setState(newState);
    }

    calculate() {
        let newState = this.state;

        if (newState.mainDisplay === "Error")
            newState.mainDisplay = 0;

        if (newState.cache) {
            switch (newState.cache.operator) {
                case "add":
                    newState.mainDisplay = newState.cache.number +  newState.mainDisplay;
                    break;
                case "subtract":
                    newState.mainDisplay = newState.cache.number -  newState.mainDisplay;
                    break;
                case "multiply":
                    newState.mainDisplay = newState.cache.number *  newState.mainDisplay;
                    break;
                case "divide":
                    if (newState.mainDisplay === 0)
                        newState.mainDisplay = "Error";
                    else
                        newState.mainDisplay = Math.floor(newState.cache.number / newState.mainDisplay);
                    break;
                default:
                    newState.mainDisplay = "Error";
                    break;
            }
            newState.cache = null;
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className="calculator">
                <div className="calculator-header">
                    <div className="calculator-maindisplay">
                        <NumberDisplay number={this.state.mainDisplay}/>
                    </div>
                    <div className="calculator-cache">
                        <NumberDisplay number={this.state.cache ? this.state.cache.number : ""} operator={this.state.cache ? this.state.cache.operator : ""} />
                    </div>
                </div>
                <div className="calculator-leftsection">
                    <Button onClick={_ => this.clear()}><div className="calculator-clear">clear</div></Button>
                    <div className="calculator-numbergrid">
                        <Button onClick={_ => this.pushDigit(1)}><div className="calculator-number">1</div></Button>
                        <Button onClick={_ => this.pushDigit(2)}><div className="calculator-number">2</div></Button>
                        <Button onClick={_ => this.pushDigit(3)}><div className="calculator-number">3</div></Button>
                        <Button onClick={_ => this.pushDigit(4)}><div className="calculator-number">4</div></Button>
                        <Button onClick={_ => this.pushDigit(5)}><div className="calculator-number">5</div></Button>
                        <Button onClick={_ => this.pushDigit(6)}><div className="calculator-number">6</div></Button>
                        <Button onClick={_ => this.pushDigit(7)}><div className="calculator-number">7</div></Button>
                        <Button onClick={_ => this.pushDigit(8)}><div className="calculator-number">8</div></Button>
                        <Button onClick={_ => this.pushDigit(9)}><div className="calculator-number">9</div></Button>
                    </div>
                    <Button onClick={_ => this.pushDigit(0)}><div className="calculator-zero">0</div></Button>
                </div>
                <div className="calculator-rightsection">
                    <Button onClick={_ => this.pushOperator("divide")}><div className="calculator-operator">÷</div></Button>
                    <Button onClick={_ => this.pushOperator("multiply")}><div className="calculator-operator">×</div></Button>
                    <Button onClick={_ => this.pushOperator("subtract")}><div className="calculator-operator">-</div></Button>
                    <Button onClick={_ => this.pushOperator("add")}><div className="calculator-operator">+</div></Button>
                    <Button onClick={_ => this.calculate()}><div className="calculator-operator">=</div></Button>
                </div>
            </div>
        )
    }
}

export default Calculator;
