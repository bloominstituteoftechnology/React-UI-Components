import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentDisplay: 0};
    this.numbers = ['clear', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    this.symbols = ['÷', '×', '−', '+', '='];
    this.update = this.update.bind(this);
  }

  update(button) {
    this.setState({currentDisplay: 5});
    console.log(this.state)
  }


  render(){
  return (
    <section className='calculator'>
      <CalculatorDisplay currentDisplay={this.state.currentDisplay}/>
      <div className='buttons'>
          <div className='numbers'>
            {this.numbers.map(number => (<NumberButton onClick={this.update} type={number}/>))}
          </div>
          <div className='symbols'>
            {this.symbols.map(symbol => (<ActionButton onClick={this.update} type={symbol}/>))}
          </div>
      </div>
    </section>
  );
}
};

export default App;
