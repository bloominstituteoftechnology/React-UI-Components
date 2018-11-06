import React from 'react';
import './App.sass';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';

const App = () => {
    return (
        <div className="app">
            <CalculatorDisplay currentValue="10" />
            <ButtonsContainer />
        </div>
    );
};

export default App;
