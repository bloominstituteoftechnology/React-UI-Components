import React from 'react';
import './Calculator.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalulatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class Calculator extends React.Component {
  handleAction(clickAction) {
    console.log(clickAction)
    console.log(this.display)
    this.display.updateDisplay(clickAction)
  }
  render() {
    this.display = <CalulatorDisplay />;
    return (
      <div className="calculator">
        {this.display}
        <div className="calc-input">
          <div className="calc-numpad">
            <NumberButton parent={this} className="calc-wide clear">clear</NumberButton>
            <NumberButton action="9" parent={this} />
            <NumberButton action="8" parent={this} />
            <NumberButton action="7" parent={this} />
            <NumberButton action="6" parent={this} />
            <NumberButton action="5" parent={this} />
            <NumberButton action="4" parent={this} />
            <NumberButton action="3" parent={this} />
            <NumberButton action="2" parent={this} />
            <NumberButton action="1" parent={this} />
            <NumberButton className="calc-wide">0</NumberButton>
          </div>
          <div className="calc-operators">
            <ActionButton action="÷" parent={this} />
            <ActionButton action="×" parent={this} />
            <ActionButton action="-" parent={this} />
            <ActionButton action="+" parent={this} />
            <ActionButton action="=" parent={this} />
          </div>
        </div>
      </div>
    );
  }
};

export default Calculator;
