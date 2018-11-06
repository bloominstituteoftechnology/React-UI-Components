import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: ""
    }
  }

  changeDisplayValue(value) {
    if (value === '') {
      this.setState({
        displayValue: ''
      })
    }
    else {
      this.setState({
        displayValue: this.state.displayValue + value
      })
    };
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
