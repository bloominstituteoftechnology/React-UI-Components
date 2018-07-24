import React from 'react';
import './App.css';

import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="container">

      <div className="display">
        <CalculatorDisplay displaynumberStyle="display-number" text={ButtonContainer} />
      </div>

      <div>
        <ButtonContainer />
      </div>

    </div>
  );
};

export default App;
