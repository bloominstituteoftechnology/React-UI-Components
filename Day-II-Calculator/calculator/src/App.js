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
    };
  }

  handleClickButton = (value) => {
    this.state.total += value;
    this.state.total = Number(this.state.total);
    this.setState(this.state);
  }

  handleClearButton = (value) => {
    this.state.total = value;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="calc-wrapper">
        <CalculatorDisplay totalValue={this.state.total} />
        <div className="buttons-wrapper">
          <ActionButton buttonStyle="action-button" text="Clear" value="0" onClick={this.handleClearButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#247;'/>
          <NumberButton buttonStyle="number-button" text='7' value="7" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='8' value="8" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='9' value="9" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#215;'/>
          <NumberButton buttonStyle="number-button" text='4' value="4" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='5' value="5" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='6' value="6" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#8722;'/>
          <NumberButton buttonStyle="number-button" text='1' value="1" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='2' value="2" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="number-button" text='3' value="3" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#43;'/>
          <ActionButton buttonStyle="action-button" text='0' value="0" onClick={this.handleClickButton}/>
          <NumberButton buttonStyle="calculation-button" text='&#61;'/>
        </div>
      </div>
    );
  }
};

export default App;
