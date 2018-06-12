import React from 'react';
import './App.css';



import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

import SevenMultiply from './components/ButtonComponents/SevenMultiply';
import FourMinus from './components/ButtonComponents/FourMinus';
import OnePlus from './components/ButtonComponents/OnePlus';
import ZeroEquals from './components/ButtonComponents/ZeroEquals';

const App = () => {
  return (
      <div className="overview">
      <CalculatorDisplay />
      <ActionButton />
      <SevenMultiply/>
      <FourMinus/>
      <OnePlus />
      <ZeroEquals />
      
    </div>

  );
};

export default App;
