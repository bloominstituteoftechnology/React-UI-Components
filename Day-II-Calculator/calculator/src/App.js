import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="container"> 
      
      <CalculatorDisplay />

      <div className="div1">
      <ActionButton style="long" text = "clear" />
      <ActionButton style="action" text = "/" />
      </div>

      <div className="div2">
      <NumberButton style="number" number="seven" text="7" />
      <NumberButton style="number" number="eight" text="8" />
      <NumberButton style="number" number="nine" text="9" />
      <ActionButton style="action" text = "*" />
      </div>

      <div className="div3">
      <NumberButton style="number" number="four" text="4" />
      <NumberButton style="number" number="five" text="5" />
      <NumberButton style="number" number="six" text="6" />
      <ActionButton style="action" text = "-" />
      </div>

      <div className="div4">
      <NumberButton style="number" number="one" text="1" />
      <NumberButton style="number" number="two" text="2" />
      <NumberButton style="number" number="three" text="3" />
      <ActionButton style="action" text = "+" />
      </div>
      
      <div>
      <NumberButton style="long" number="zero" text="0" />
      <ActionButton style="action" text = "=" />
      </div>
    </div>
  );
};

export default App;
