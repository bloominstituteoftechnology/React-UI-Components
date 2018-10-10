import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = "app">
      
      
    {/*Calculator Display first row for answer*/}
    <div className = 'row'>
        <CalculatorDisplay />
    </div>
     {/*Calculator second row : clear and button*/}
    <div className = 'row'>
        <NumberButton name="clear" />
        <ActionButton name="/" />
    </div>
   {/*Calculator third row : 7, 8, 9 button*/}
    <div className = 'row'>
        <NumberButton  name="7" />
        <NumberButton  name="8" />
        <NumberButton  name="9" />
        <ActionButton  name="x" />
    </div>
   {/*Calculator forth row : 4, 5, 6 button*/}
    <div className = 'row'>
        <NumberButton  name="4" />
        <NumberButton  name="5" />
        <NumberButton  name="6" />
        <ActionButton  name="-" />
    </div>
   {/*Calculator fifth row : 1, 2, 3 button*/}
    <div className = 'row'>
        <NumberButton  name="1" />
        <NumberButton  name="2" />
        <NumberButton  name="3" />
        <ActionButton  name="+" />
    </div>
   {/*Calculator last row : 0 and = button*/}
    <div className = 'row'>
        <NumberButton name="0" />
        <ActionButton name="=" />
    </div>
   </div>
);
};

export default App;
