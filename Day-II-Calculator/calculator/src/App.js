import React, {Component} from 'react';
import './App.css';
import {FlexColumn, FlexRow} from "./components/Elements/Flex";
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import math from 'mathjs'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expression: ""
        }
    }

    setExpression = exp => {
        this.setState({expression: this.state.expression + exp});
    };

    calculate = () => {
        this.setState({expression: math.eval(this.state.expression)});
    };

    clear = () => {
        this.setState({expression: ""})
    };

    render() {
        const {expression} = this.state;

        return (
            <FlexColumn alignEnd width="500px" padding={50}>
                <CalculatorDisplay expression={expression}/>

                <FlexRow width="full">
                    <NumberButton grow clear={() => this.clear()}>clear</NumberButton>
                    <ActionButton setExpression={num => this.setExpression(num)}>÷</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton bold setExpression={num => this.setExpression(num)}>7</NumberButton>
                    <NumberButton bold setExpression={num => this.setExpression(num)}>8</NumberButton>
                    <NumberButton bold setExpression={num => this.setExpression(num)}>9</NumberButton>
                    <ActionButton setExpression={num => this.setExpression(num)}>x</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton bold setExpression={num => this.setExpression(num)}>4</NumberButton>
                    <NumberButton bold setExpression={num => this.setExpression(num)}>5</NumberButton>
                    <NumberButton bold setExpression={num => this.setExpression(num)}>6</NumberButton>
                    <ActionButton setExpression={num => this.setExpression(num)}>-</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton bold setExpression={num => this.setExpression(num)}>1</NumberButton>
                    <NumberButton bold setExpression={num => this.setExpression(num)}>2</NumberButton>
                    <NumberButton bold setExpression={num => this.setExpression(num)}>3</NumberButton>
                    <ActionButton setExpression={num => this.setExpression(num)}>+</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton grow bold setExpression={num => this.setExpression(num)}>0</NumberButton>
                    <ActionButton calculate={() => this.calculate()}>=</ActionButton>
                </FlexRow>
            </FlexColumn>
        );
    }

};

export default App;
