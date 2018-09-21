import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="container">
      <div className="row row1">
        <ActionButton buttonStyle="button clear" text="clear" />
        <NumberButton buttonStyle="button operator divison" text = "÷" />
      </div>
      <div className="row row2">
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton buttonStyle="button operator multiplication" text="×" />
      </div>
      <div className="row row3">
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton buttonStyle="button operator minus" text="—" />
      </div>
      <div className="row row4">
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton buttonStyle="button operator plus" text="+" />
      </div>
      <div className="row row5">
        <ActionButton buttonStyle="button zero" text="0" />
        <NumberButton buttonStyle="button operator equals" text="=" />
      </div>
    </div>
  );
};

export default App;
