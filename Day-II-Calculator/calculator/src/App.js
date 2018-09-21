import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonBox from './components/ButtonComponents/ButtonBox';

const App = () => {
  return (
    <div>
      <CalculatorDisplay/>
      <ButtonBox/>
    </div>
  );
};

export default App;


// <div className="calculator-box">
//   <div className="math-box">0</div>

//   <div className="button-box">

//     <div className="keypad-box">
//       <div className="clear">
//         clear 
//       </div>

//       <div className="numbers">
//         1,2,3,4,5,6,7,8,9
//       </div>

//       <div className="zero">
//         0
//       </div>
//     </div>

//     <div className="function-box">
//       <div className="function">
//       % X - + =
//       </div>
//     </div>

//   </div><!--button-box-->

// </div><!--calculator-box-->