import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberCollection from './components/ButtonComponents/NumberCollection';
import ActionCollection from './components/ButtonComponents/ActionCollection';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
	  <div className="parent">
	  <NumberCollection />
	  <ActionCollection />
	  </div>
    </div>
  );
};

export default App;
