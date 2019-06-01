import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import SymbolsButton from './components/ButtonComponents/SymbolsButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
    };
  };

  onClickHandler = event => {
    this.setState({total: this.state.total});
  };
  
  render() {
  return (
    <div className="container">

     <CalculatorDisplay text= {this.state.total} />

     <div className="row">
      <ActionButton buttonStyle='action-btn' text='clear' />
      <SymbolsButton buttonStyle='symbol-btn' text='/' />
     </div>

      <div className="row">
        <NumberButton onClick={this.onClickHandler} buttonStyle='style' text='7'/>
        <NumberButton buttonStyle='style' text='4'/>
        <NumberButton buttonStyle='style' text='1'/>
        <SymbolsButton buttonStyle='symbol-btn' text='x' />
      </div>

      <div className="row">
        <NumberButton buttonStyle='style' text='8'/>
        <NumberButton buttonStyle='style' text='5'/>
        <NumberButton buttonStyle='style' text='2'/>
        <SymbolsButton buttonStyle='symbol-btn' text='-' />
      </div>

      <div className="row">
        <NumberButton buttonStyle='style' text='9'/>
        <NumberButton buttonStyle='style' text='6'/>
        <NumberButton buttonStyle='style' text='3'/>
        <SymbolsButton buttonStyle='symbol-btn' text='+' />
      </div>
    
      <div className="row">
       <ActionButton buttonStyle='action-btn' text='0'/>
       <SymbolsButton buttonStyle='symbol-btn' text='=' />
     </div>

    </div>
  );
 }
};

export default App;
