import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor () {
    super();
    this.state ={total:0};
  }

  render() {
    return (
      <div className="calc-wrapper">
        <CalculatorDisplay totalValue={this.state.total} />
        <div className="buttons-wrapper">
          <ActionButton buttonStyle="action-button" text="Clear"/>
          <NumberButton buttonStyle="calculation-button" text='&#247;'/>
          <NumberButton buttonStyle="number-button" text='7'/>
          <NumberButton buttonStyle="number-button" text='8'/>
          <NumberButton buttonStyle="number-button" text='9'/>
          <NumberButton buttonStyle="calculation-button" text='&#215;'/>
          <NumberButton buttonStyle="number-button" text='4'/>
          <NumberButton buttonStyle="number-button" text='5'/>
          <NumberButton buttonStyle="number-button" text='6'/>
          <NumberButton buttonStyle="calculation-button" text='&#8722;'/>
          <NumberButton buttonStyle="number-button" text='1'/>
          <NumberButton buttonStyle="number-button" text='2'/>
          <NumberButton buttonStyle="number-button" text='3'/>
          <NumberButton buttonStyle="calculation-button" text='&#43;'/>
          <ActionButton buttonStyle="action-button" text="0"/>
          <NumberButton buttonStyle="calculation-button" text='&#61;'/>
        </div>
      </div>
    );
  }
};

export default App;
