import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      total:'0',
      savedValue: '0',
      operation: ''
    };
  }

  handleClickButton = (value) => {
    this.state.total += value;
    this.state.total = Number(this.state.total);
    this.setState({total: this.state.total});
  }

  handleClearButton = (value) => {
    this.setState({total: value, savedValue: '0', operation: ''});
  }

  Multiply = (value) => {
    this.state.savedValue = this.state.total;
    this.state.total = '0';
    this.state.operation = 'multiply';
    this.setState(this.state);
    console.log(this.state);
  }

  Divide = (value) => {
    this.state.savedValue = this.state.total;
    this.state.total = '0';
    this.state.operation = 'divide';
    this.setState(this.state);
    console.log(this.state);
  }

  Subtract = (value) => {
    this.state.savedValue = this.state.total;
    this.state.total = '0';
    this.state.operation = 'subtract';
    this.setState(this.state);
    console.log(this.state);
  }

  Add = (value) => {
    this.state.savedValue = this.state.total;
    this.state.total = '0';
    this.state.operation = 'add';
    this.setState(this.state);
    console.log(this.state);
  }

  Result = (value) => {
    if (this.state.operation === 'multiply'){
      this.state.total *= this.state.savedValue;
    } else if (this.state.operation === 'divide'){
      this.state.total /= this.state.savedValue;
    } else if (this.state.operation === 'subtract'){
      this.state.total -= this.state.savedValue;
    } else if (this.state.operation === 'add'){
      this.state.total += this.state.savedValue;
    } 
    this.state.savedValue = this.state.total;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="calc-wrapper">
        <CalculatorDisplay totalValue={this.state.total} />
        <div className="buttons-wrapper">
          <ActionButton buttonStyle="action-button" text="Clear" value="0" onClick={this.handleClearButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#247;' value='' onClick={this.Divide}/>
          <NumberButton buttonStyle="number-button" text='7' value="7" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='8' value="8" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='9' value="9" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#215;' value='' onClick={this.Multiply}/>
          <NumberButton buttonStyle="number-button" text='4' value="4" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='5' value="5" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='6' value="6" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#8722;' value='' onClick={this.Subtract}/>
          <NumberButton buttonStyle="number-button" text='1' value="1" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='2' value="2" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='3' value="3" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#43;' value='' onClick={this.Add}/>
          <ActionButton buttonStyle="action-button" text='0' value="0" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#61;' value='' onClick={this.Result}/>
        </div>
      </div>
    );
  }
};

export default App;
