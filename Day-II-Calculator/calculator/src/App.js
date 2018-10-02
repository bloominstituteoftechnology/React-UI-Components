import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className='calc-container'>
        <CalculatorDisplay />
    </div>
  );
};

export default App;
