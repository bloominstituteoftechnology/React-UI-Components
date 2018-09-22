import React, {Component} from 'react';
import './App.css';
import {FlexColumn, FlexRow} from "./components/Elements/Flex";
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    render() {
        const {number} = this.state;

        return (
            <FlexColumn alignEnd width="500px" padding={50}>
                <CalculatorDisplay number={number}/>

                <FlexRow width="full">
                    <NumberButton grow>clear</NumberButton>
                    <ActionButton>÷</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton bold onClick={() => this.setState({number: 7})}>7</NumberButton>
                    <NumberButton bold onClick={() => this.setState({number: 8})}>8</NumberButton>
                    <NumberButton bold onClick={() => this.setState({number: 9})}>9</NumberButton>
                    <ActionButton>x</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton bold onClick={() => this.setState({number: 4})}>4</NumberButton>
                    <NumberButton bold onClick={() => this.setState({number: 5})}>5</NumberButton>
                    <NumberButton bold onClick={() => this.setState({number: 6})}>6</NumberButton>
                    <ActionButton>-</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton bold onClick={() => this.setState({number: 1})}>1</NumberButton>
                    <NumberButton bold onClick={() => this.setState({number: 2})}>2</NumberButton>
                    <NumberButton bold onClick={() => this.setState({number: 3})}>3</NumberButton>
                    <ActionButton>+</ActionButton>
                </FlexRow>

                <FlexRow width="full">
                    <NumberButton grow bold onClick={() => this.setState({number: 0})}>0</NumberButton>
                    <ActionButton>=</ActionButton>
                </FlexRow>
            </FlexColumn>
        );
    }

};

export default App;
