import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container">
    <div>
      <CalculatorDisplay displayStyle="calc-display" text= "0"/>
      
     <ActionButton actionStyle="buttonstyle-long" text= "clear"/>
     <NumberButton actionStyle="buttonstyle-red" text= "&divide;"/>
     <NumberButton actionStyle="buttonstyle-num" text= "7"/>
     <NumberButton actionStyle="buttonstyle-num" text= "8"/>
     <NumberButton actionStyle="buttonstyle-num" text= "9"/>
     <NumberButton actionStyle="buttonstyle-red" text= "&times;"/>
     <NumberButton actionStyle="buttonstyle-num" text= "4"/>
     <NumberButton actionStyle="buttonstyle-num" text= "5"/>
     <NumberButton actionStyle="buttonstyle-num" text= "6"/>
     <NumberButton actionStyle="buttonstyle-red" text= "-"/>
     <NumberButton actionStyle="buttonstyle-num" text= "1"/>
     <NumberButton actionStyle="buttonstyle-num" text= "2"/>
     <NumberButton actionStyle="buttonstyle-num" text= "3"/>
     <NumberButton actionStyle="buttonstyle-red" text= "+"/>
    
     <ActionButton actionStyle="buttonstyle-long" text= "0"/>
     <NumberButton actionStyle="buttonstyle-red" text= "="/>
     
     
      
     </div>
    </div>
  );
};

export default App;
