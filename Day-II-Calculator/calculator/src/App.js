import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
// import DisplayButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />

      <div className="row" id="row-one">
        <ActionButton name="clear" />
        {/* <NumberButton name="&#038;" extraStyle="redButton"> */}
      </div>



      </div>
      );
    };
    
    export default App;
