import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ActionsDisplay from './components/DisplayComponents/ActionsDisplay';
import NumbersDisplay from './components/DisplayComponents/NumbersDisplay';



const App = (props) => {
  return (
    <div>
      <NumbersDisplay />

      <ActionsDisplay />
      
    </div>
    
  );
};

export default App;
