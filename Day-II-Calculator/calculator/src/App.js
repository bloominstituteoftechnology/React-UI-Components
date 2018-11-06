import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import OperatorsContainer from './components/ButtonComponents/OperatorsContainer';
import NumbersContainer from './components/ButtonComponents/NumbersContainer';
const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay text='0' />
      <div className="calculator-functions">
        <NumbersContainer />
        <OperatorsContainer />
      </div> 
    </div>
  );
};

export default App;
