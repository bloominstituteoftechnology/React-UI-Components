import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const values = ['/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+']
const App = props => {
  return (
  <div className='calculator'>
    <CalculatorDisplay displayText='0' />
    <ActionButton buttonText="clear"/>

    {values.map(num => {
      let style;
        if ('=+-x/'.includes(num)) {
          style = 'red';
        }
      return (
        <NumberButton buttonText={num} buttonStyles={style} />
      )
    })}

    <ActionButton buttonText="0"/>
    <NumberButton buttonText={'='} />

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
