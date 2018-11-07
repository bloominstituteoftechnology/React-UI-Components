import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      number1: '',
      operator: '',
      number2: ''
    };
    this.calculate = {
      '+': function(x, y) {return x + y},
      '-': function(x, y) {return x - y},
      'x': function(x, y) {return x * y},
      '÷': function(x, y) {return x / y}
    }
  }

  changeDisplayValue(value) {
    console.log('hey');
    if ((this.state.number1 === '') && (value !== ('+' || '-' || 'x' || '÷'))) {
      this.setState({
        number1: value
      })
      console.log(value);
    }
    if (value === '') {
      this.setState({
        displayValue: ''
      })
    }
    if (value === ('+' || '-' || 'x' || '÷')) {
      this.setState({
        operator: value
      });
      console.log(this.state.operator);
    }
    if ((this.state.operator !== '') && (value !== ('+' || '-' || 'x' || '÷'))) {
      this.setState({
        number2: value
      });
      this.setState({
        displayValue: this.calculate[this.state.operator](this.state.number1, this.state.number2)
      });
      console.log(this.state.displayValue);
    }
    else {
      this.setState({
        displayValue: this.state.displayValue + value
      })
    }
    console.log(this.number1);
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
