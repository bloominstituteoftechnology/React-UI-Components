import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton'


const App = () => {
  return (
    <div className="container">
    	<NumberButton number="0"/>
    	<NumberButton number="1"/>
    	<NumberButton number="2"/>
    	<NumberButton number="3"/>
    	<NumberButton number="4"/>
    	<NumberButton number="5"/>
    	<NumberButton number="6"/>
    	<NumberButton number="7"/>
    	<NumberButton number="8"/>
    	<NumberButton number="9"/>
    	<CalculatorDisplay number="0"/>
    	<ActionButton text="="/>
    	<ActionButton text="+"/>
    	<ActionButton text="-"/>
    	<ActionButton text="X"/>
    </div>
  );
};

export default App;
