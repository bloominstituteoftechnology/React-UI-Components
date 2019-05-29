import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
// import ActionButton from './components/ButtonComponents/ActionButton';
// import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='container'>

      <div className='row'>
      <NumberButton buttonStyle="long-button" text="clear"/>
      <NumberButton buttonStyle="red-button" text="/"/><br />
      </div>

      <div className='row'>
      <NumberButton buttonStyle="regular-button" text="7"/>
      <NumberButton buttonStyle="regular-button" text="8"/>
      <NumberButton buttonStyle="regular-button" text="9"/>
      <NumberButton buttonStyle="red-button" text="X"/><br />
      </div>

      <div className='row'>
      <NumberButton buttonStyle="regular-button" text="4"/>
      <NumberButton buttonStyle="regular-button" text="5"/>
      <NumberButton buttonStyle="regular-button" text="6"/>
      <NumberButton buttonStyle="red-button" text="-"/><br />
      </div>

      <div className='row'>
      <NumberButton buttonStyle="regular-button" text="1"/>
      <NumberButton buttonStyle="regular-button" text="2"/>
      <NumberButton buttonStyle="regular-button" text="3"/>
      <NumberButton buttonStyle="red-button" text="+"/><br />
      </div>

      <div className='row'>
      <NumberButton buttonStyle="long-button" text="0"/>
      <NumberButton buttonStyle="regular-button" text="="/>
      </div>
      
    </div>
  );
};

export default App;
