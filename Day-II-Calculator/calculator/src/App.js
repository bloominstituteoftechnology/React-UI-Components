import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <section>
      <div className="number-holder">
      <ActionButton BigContent="BigContent" number="0" />
      <NumberButton sign="sign" number="="/>
      <NumberButton  number="1"/>
      <NumberButton  number="2"/>
      <NumberButton  number="3"/>
      <NumberButton sign="sign" number="+"/>
      <NumberButton  number="4"/>
      <NumberButton  number="5"/>
      <NumberButton  number="6"/>
      <NumberButton sign="sign"  number="−"/>
      <NumberButton  number="7"/>
      <NumberButton  number="8"/>
      <NumberButton  number="9"/>
      <NumberButton sign="sign"  number="×"/>
      <ActionButton BigContent="BigContent" number="clear" />
      <NumberButton sign="sign" number="÷"/>
      <CalculatorDisplay number="0" />
    </div>
    </section>
  );
};

export default App;


//  (
    
//   <section className="calculator">
    
//   <div className="number-holder">
//   <button className="bottom-content"> 0 </button>
//   <button className="number-content sign"> = </button>    
//   <button className="number-content"> 1 </button>
//   <button className="number-content"> 2 </button>
//   <button className="number-content"> 3 </button>
//   <button className="number-content sign"> +</button>
//   <button className="number-content"> 4 </button>
//   <button className="number-content"> 5 </button>
//   <button className="number-content"> 6 </button>
//   <button className="number-content sign"> − </button>
//   <button className="number-content"> 7 </button>
//   <button className="number-content"> 8 </button>
//   <button className="number-content"> 9 </button>
//   <button className="number-content sign"> × </button>
//   <button className="bottom-content text-clear"> clear </button>
//   <button className="number-content sign"> ÷ </button>    
//    </div>
//    </section>);