import React from 'react';
import './App.css';

import ButtonContainer1 from './components/ButtonComponents/ButtonContainer1';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <div className="display">
        <CalculatorDisplay text="0" />
      </div>
      <div>
        <ButtonContainer1 />
      </div>
    </div>
  );
};

export default App;
