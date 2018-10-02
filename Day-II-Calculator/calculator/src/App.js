import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const values = ['÷', 7, 8, 9, '×', 4, 5, 6, '−', 1, 2, 3, '+']
const App = props => {
  let total = 0;

  return (
  <div className='calculator'>
    <CalculatorDisplay displayText={total} />
    <ActionButton buttonText="clear"/>

    {values.map(num => {
      let style;
        if ('+×÷−'.includes(num)) {
          style = 'red';
        }
      return (
        <NumberButton key={num} buttonText={num} buttonStyles={style} />
      )
    })}

    <ActionButton buttonText="0"/>
    <NumberButton buttonText={'='} buttonStyles='red' />

  </div>
  )
};

// export default CalculatorDisplay;
// const App = () => {
//   return (
//     <div>
//       <CalculatorDisplay />
//     </div>

//   );
// };

export default App;
