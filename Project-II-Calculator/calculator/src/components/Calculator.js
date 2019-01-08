import React, { Component } from 'react';
import CalculatorDisplay from './DisplayComponents/CalculatorDisplay';
import NumberButton from './ButtonComponents/NumberButton';
import ActionButton from './ButtonComponents/ActionButton';


class Calculator extends Component {
    constructor() {
        super();

        this.setOperator = this.setOperator.bind(this);
        this.numberButtonPress = this.numberButtonPress.bind(this);
        this.clear = this.clear.bind(this);
        this.equals = this.equals.bind(this);

        this.state = {
            operator: '',
            activeInput: '0',
            equationStr: '',
            answered: false
        }
    }

    setOperator(operator) {
        let opChar;
        switch(operator) {
            case 'add':
                opChar = '+';
            break;
            case 'subtract':
                opChar = '-';
            break;
            case 'multiply':
                opChar = '*';
            break;
            case 'divide':
                opChar = '/';
            break;
        }

        if(this.state.answered) {
            this.clear('0', opChar, operator);
            return;
        }

        if(this.state.equationStr === '' && this.state.activeInput === '0') {
            return;
        } else if(this.state.activeInput === '0') {
            let str = this.state.equationStr.split('');
            str.pop();
            let final = str.join('');
            final = final + opChar;
            this.setState({ operator, equationStr: final });
        } else {
            let equationStr;
            equationStr = `${this.state.equationStr} ${this.state.activeInput} ${opChar}`;
            this.setState({ operator, activeInput: '0', equationStr });
        }
    }

    equals() {
        if(this.state.answered) {
            this.clear();
            return;
        } else if(this.state.activeInput === '0' && this.state.equationStr === '') {
            return;
        }

        if(this.state.activeInput === '0') {
            let str = this.state.equationStr.split('');
            str.pop();
            let final = str.join('');
            let result = eval(final);
            this.setState({ equationStr: `${this.state.equationStr} ${this.state.activeInput}`, activeInput: result, answered: true });
        } else {
            let final = this.state.equationStr;
            final = `${final} ${this.state.activeInput}`;
            let result = eval(final);
            this.setState({ equationStr: `${this.state.equationStr} ${this.state.activeInput}`, activeInput: result, answered: true });
        }
    }

    numberButtonPress(num) {
        

        if(this.state.answered) {
            let opChar;
            switch(this.state.operator) {
                case 'add':
                    opChar = '+';
                break;
                case 'subtract':
                    opChar = '-';
                break;
                case 'multiply':
                    opChar = '*';
                break;
                case 'divide':
                    opChar = '/';
                break;
            }
            if(this.state.operator === '') {
                this.clear(num, '+', 'add');
            } else {
                this.clear(num, opChar, this.state.operato);
            }
            return;
        }
        if(this.state.activeInput === '0') {
            this.setState({ activeInput: num });
            return;
        }
        let input = this.state.activeInput;
        let newInput = input + num;
        this.setState({ activeInput: newInput });
    }

    clear(n, op, opType) {
        if(n !== undefined && n !== 'clear') {
            this.setState({
                operator: opType,
                activeInput: n,
                equationStr: this.state.activeInput + ` ${op}`,
                answered: false
            });
            return;
        }
        this.setState({
            operator: '',
            activeInput: '0',
            equationStr: '',
            answered: false
        });
    }

    render() {

        return(
            <div className="Calculator">
                <CalculatorDisplay activeInput={this.state.activeInput} equation={this.state.equationStr}/>
                <ActionButton text="clear" buttonStyle="ActionButton" value="clear" action={this.clear} />
                <NumberButton text="÷" buttonStyle="NumberButtonRed" value="divide" action={this.setOperator} />
                <NumberButton text="7" buttonStyle="NumberButton" value="7" action={this.numberButtonPress} />
                <NumberButton text="8" buttonStyle="NumberButton" value="8" action={this.numberButtonPress} />
                <NumberButton text="9" buttonStyle="NumberButton" value="9" action={this.numberButtonPress} />
                <NumberButton text="X" buttonStyle="NumberButtonRed" value="multiply" action={this.setOperator} />
                <NumberButton text="4" buttonStyle="NumberButton" value="4" action={this.numberButtonPress} />
                <NumberButton text="5" buttonStyle="NumberButton" value="5" action={this.numberButtonPress} />
                <NumberButton text="6" buttonStyle="NumberButton" value="6" action={this.numberButtonPress} />
                <NumberButton text="-" buttonStyle="NumberButtonRed" value="subtract" action={this.setOperator} />
                <NumberButton text="1" buttonStyle="NumberButton" value="1" action={this.numberButtonPress} />
                <NumberButton text="2" buttonStyle="NumberButton" value="2" action={this.numberButtonPress} />
                <NumberButton text="3" buttonStyle="NumberButton" value="3" action={this.numberButtonPress} />
                <NumberButton text="+" buttonStyle="NumberButtonRed" value="add" action={this.setOperator} />
                <ActionButton text="0" buttonStyle="ActionButton" value="0" action={this.numberButtonPress} />
                <NumberButton text="=" buttonStyle="NumberButtonRed" value="equals" action={this.equals} />
            </div>
        )
    }
    
}

export default Calculator;