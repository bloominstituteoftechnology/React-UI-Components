import React from 'react';
import './App.css';
import Buttons from './components/ButtonComponents/Buttons';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
    return (
        <div className="container">
            <div className="line display">
                <CalculatorDisplay />
            </div>
            <Buttons />
        </div>
  );
};

export default App;
