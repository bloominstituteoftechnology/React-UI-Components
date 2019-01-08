import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }
  render() {
    return (
      <div className='App'>
      <Display buttonStyle = {'displaybar'} text = {this.state.total}/>
      <ActionButton action = {Clear} />
      <ActionButton action = {Divide} />
      <NumberButton buttonStyle = {'digit'} text = {7} />
      <NumberButton buttonStyle = {'digit'} text = {8} />
      <NumberButton buttonStyle = {'digit'} text = {9} />
      <ActionButton action = {Multiply} />
      <NumberButton buttonStyle = {'digit'} text = {4} />
      <NumberButton buttonStyle = {'digit'} text = {5} />
      <NumberButton buttonStyle = {'digit'} text = {6} />
      <ActionButton action = {Subtract} />
      <NumberButton buttonStyle = {'digit'} text = {1} />
      <NumberButton buttonStyle = {'digit'} text = {2} />
      <NumberButton buttonStyle = {'digit'} text = {3} />
      <ActionButton action = {Add} />
      <NumberButton buttonStyle = {'digit big'} text = {0} />
      <ActionButton action = {Equals} />
      </div>
    );
  }
}


const Add = {
  text: '+',
  buttonStyle: 'action',
  operation: '+'
}

const Subtract = {
  text: '-',
  buttonStyle: 'action',
  operation: '-'
}

const Multiply = {
  text: 'x',
  buttonStyle: 'action',
  operation: '*'
}

const Divide = {
  text: '÷',
  buttonStyle: 'action',
  operation: '/'
}

const Clear = {
  text: 'clear',
  buttonStyle: 'action big',
}

const Equals = {
  text: '=',
  buttonStyle: 'action',
}


export default App;
