import React from 'react';
import './App.css';

import ActionComponent from './components/ButtonComponents/ActionButton';
import NumberComponent from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
        <div className="components">
          <NumberComponent />
          <ActionComponent />
        </div>
    </div>
  );
};

export default App;
