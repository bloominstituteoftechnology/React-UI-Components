import React from 'react';
import NumberButtonsContainer from './components/ButtonComponents/NumberButtonsContainer';
import ActionButtonsContainer from './components/ButtonComponents/ActionButtonsContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculon">
      <CalculatorDisplay value='0'/>
      <NumberButtonsContainer />
      <ActionButtonsContainer />
    </div>
  );
}

export default App;
