import React from 'react';
import './App.css';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3><br></br>
          <CalculatorDisplay />
         <ButtonContainer />
    </div>
  );
};

export default App;
