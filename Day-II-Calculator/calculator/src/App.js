import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  newNumber(amount) {
    this.setState({ count: amount });
  }
  twoNumbers(arg1, arg2, cb) {
    return cb(this.newNumber(arg1), this.newNumber(arg2));
  }
  multiply(arg1, arg2) {
    return this.twoNumbers(arg1 * arg2)
  }
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay total={this.state.count} />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" text="clear" onClick={() => this.newNumber(0)} />
          <NumberButton bgColor="red-button" value="&divide;" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="7" onClick={() => this.newNumber(7)} />
          <NumberButton bgColor="num-button" value="8" onClick={() => this.newNumber(8)} />
          <NumberButton bgColor="num-button" value="9" onClick={() => this.newNumber(9)} />
          <NumberButton bgColor="red-button" value="&times;" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="4" onClick={() => this.newNumber(4)} />
          <NumberButton bgColor="num-button" value="5" onClick={() => this.newNumber(5)} />
          <NumberButton bgColor="num-button" value="6" onClick={() => this.newNumber(6)} />
          <NumberButton bgColor="red-button" value="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="1" onClick={() => this.newNumber(1)} />
          <NumberButton bgColor="num-button" value="2" onClick={() => this.newNumber(2)} />
          <NumberButton bgColor="num-button" value="3" onClick={() => this.newNumber(3)} />
          <NumberButton bgColor="red-button" value="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0" onClick={() => this.newNumber(0)} />
          <NumberButton bgColor="red-button" value="=" />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
