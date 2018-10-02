import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'; 
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="main-container">
    <CalculatorDisplay />
    <div className="firstcontainer">
    <ActionButton actionstyle="longerbutton" text="clear" />
    <NumberButton buttonstyle="buttonstyle" text="&divide;"/>
    </div>
    <div className="secondcontainer">
    <NumberButton buttonstyle="buttonstylewhite" text="7"/>
    <NumberButton buttonstyle="buttonstylewhite" text="8"/>
    <NumberButton buttonstyle="buttonstylewhite" text="9"/>
    <NumberButton buttonstyle="buttonstyle" text="&times;"/>
    </div>
    <div className="thirdcontainer">
    <NumberButton buttonstyle="buttonstylewhite" text="4"/>
    <NumberButton buttonstyle="buttonstylewhite" text="5"/>
    <NumberButton buttonstyle="buttonstylewhite" text="6"/>
    <NumberButton buttonstyle="buttonstyle" text="&minus;"/>
    </div>
    <div className="fourcontainer">
    <NumberButton buttonstyle="buttonstylewhite" text="1"/>
    <NumberButton buttonstyle="buttonstylewhite" text="2"/>
    <NumberButton buttonstyle="buttonstylewhite" text="3"/>
    <NumberButton buttonstyle="buttonstyle" text="+"/>
    </div>
    <div className="fivecontainer">
    <ActionButton actionstyle="longerbutton1" text="0" />
    <NumberButton buttonstyle="buttonstyle" text="="/>
    </div>




    
  
    </div>
  );
};

export default App;
