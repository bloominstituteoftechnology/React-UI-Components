import React from 'react';
import './App.css';
import NumberButtons from "./components/ButtonComponents/NumberButton.js";
import ActionButton from "./components/ButtonComponents/ActionButton.js";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js"
const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <CalculatorDisplay />
      <div className='digits'>
          <div className ='col'>
            <NumberButtons text="+" />
            <NumberButtons text="-" />
            <NumberButtons text="*" />
            <NumberButtons text="/" />
          </div>
        <div className ='col'>

<NumberButtons text="1" />
<NumberButtons text="2" />
<NumberButtons text="3" />
</div>
<div className ='col'>
<NumberButtons text="4" />
<NumberButtons text="5" />
<NumberButtons text="6" />
</div>
<div className ='col'>
<NumberButtons text="7" />
<NumberButtons text="8" />
<NumberButtons text="9" />
</div>
<div className ='col'>
<NumberButtons text="0" />
<ActionButton />
</div>
</div>
>
    </div>
  );
};




export default App;
