import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component{
  constructor () {
    super();
    this.state = {doMath: [1, 3]};
  }

  render () {
    return (
      <div className = 'calcBox'>
        <CalculatorDisplay data = {this.state.doMath}/>
        <ButtonContainer/>
      </div>
    );
  }
};

export default App;
