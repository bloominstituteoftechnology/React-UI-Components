import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: ""
    };
    this.number1 = this.state.displayValue;
    this.operator = '';
    this.number2 = '';
    this.calculate = {
      '+': function(x, y) {return x + y},
      '-': function(x, y) {return x - y},
      'x': function(x, y) {return x * y},
      '÷': function(x, y) {return x / y}
    }
  }

  changeDisplayValue(value) {
    if (this.operator !== '') {
      if (value !== ('+' || '-' || 'x' || '÷')) {
        this.number2 = value;
        this.setState({
          displayValue: this.calculate[this.operator](this.number1, this.number2)
        })
        console.log(this.state.displayValue);
      }
    }
    else if (value === ('+' || '-' || 'x' || '÷')) {
      this.operator = value;
    }
    else if (value === '') {
      this.setState({
        displayValue: ''
      })
    }
    else {
      this.setState({
        displayValue: this.state.displayValue + value
      })
    }
  }
  
  render() {
    return (
      <div className="appDiv">
        <CalculatorDisplay displayValue={this.state.displayValue} />
        <ButtonContainer onValueReceived={(value) => {
          if (value === 'clear') {
            this.changeDisplayValue('');
          }
          else {
            this.changeDisplayValue(value)
          }
        }} />
      </div>
    );
  }
  
};

export default App;
