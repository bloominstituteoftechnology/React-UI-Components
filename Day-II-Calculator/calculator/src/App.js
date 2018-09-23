import React from 'react';
import './App.css';
import Buttons from './components/ButtonComponents/Buttons';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
    return (
        <div className="container">
            <CalculatorDisplay />
            <Buttons />
        </div>
  );
};

export default App;
