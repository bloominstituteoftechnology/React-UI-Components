import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';






const App = () => {
  return (
    <div className="calculator">
     <CalculatorDisplay />

     <div className="calc-num">
      <ActionButton buttonStyle="action" text="clear" />
     <NumberButton buttonStyle="color" text="/" />
     </div>
     
     <div className="calc-num">
     <NumberButton buttonStyle="num" text="7" />
     <NumberButton buttonStyle="num" text="8" />
     <NumberButton buttonStyle="num" text="9" />
     <NumberButton buttonStyle="color" text="X" />
    </div>

    <div className="calc-num">
     <NumberButton buttonStyle="num" text="4" />
     <NumberButton buttonStyle="num" text="5" />
     <NumberButton buttonStyle="num" text="6" />
     <NumberButton buttonStyle="color" text="-" />
     </div>

     <div className="calc-num">
     <NumberButton buttonStyle="num" text="1" />
     <NumberButton buttonStyle="num" text="2" />
     <NumberButton buttonStyle="num" text="3" />
     <NumberButton buttonStyle="color" text="+" />
     </div>

     <div className="calc-num">
     <ActionButton buttonStyle="actions" text="0" />
     <NumberButton buttonStyle="color" text="=" />
     </div>

    </div>
  );
};

export default App;
