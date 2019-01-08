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

        if(this.state.answered) {
            this.clear();
            return;
        }

        if(this.state.equationStr === '' && this.state.activeInput === '0') {
            return;
        } else if(this.state.activeInput === '0') {
            let str = this.state.equationStr.split('');
            str.pop();
            let final = str.join('');
            switch(operator) {
                case 'add':
                    final = final + '+'
                break;
                case 'subtract':
                    final = final + '-'
                break;
                case 'multiply':
                    final = final + '*'
                break;
                case 'divide':
                    final = final + '/' // /
                break;
            }
            this.setState({ operator, equationStr: final });
        } else {
            let opChar;
            let equationStr;
            switch(operator) {
                case 'add':
                    opChar = '+';
                    equationStr = `${this.state.equationStr} ${this.state.activeInput} ${opChar}`;
                    this.setState({ operator, activeInput: '0', equationStr });
                break;
                case 'subtract':
                    opChar = '-';
                    equationStr = `${this.state.equationStr} ${this.state.activeInput} ${opChar}`;
                    this.setState({ operator, activeInput: '0', equationStr });
                break;
                case 'multiply':
                    opChar = '*';
                    equationStr = `${this.state.equationStr} ${this.state.activeInput} ${opChar}`;
                    this.setState({ operator, activeInput: '0', equationStr });
                break;
                case 'divide':
                    opChar = '/'; // /
                    equationStr = `${this.state.equationStr} ${this.state.activeInput} ${opChar}`;
                    this.setState({ operator, activeInput: '0', equationStr });
                break;
            }
        }
    }

    equals() {
        if(this.state.answered) {
            this.clear();
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
            this.setState({ activeInput: num, answered: false });
            return
        }
        if(this.state.activeInput === '0') {
            this.setState({ activeInput: num });
            return;
        }
        let input = this.state.activeInput;
        let newInput = input + num;
        this.setState({ activeInput: newInput });
    }

    clear() {
        this.setState({
            operator: '',
            activeInput: '0',
            equationStr: ''
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