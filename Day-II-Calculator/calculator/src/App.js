import React from 'react';
import './App.css';

//Button Components
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

//Display Components
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='bigContainer'>
      <CalculatorDisplay />
      <div className='buttonsContainer'>
        <NumberButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
