import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

function App() {
  return (
    <div className='App'>
      <CalculatorDisplay />
      <div className='numSquare'>
        <ActionButton text='clear' buttonStyle='rectangle' />
         <ActionButton text='/' buttonStyle='actionButton' />
        <div className='row1'>
          <NumberButton text='7' buttonStyle='numButton' />
          <NumberButton text='8' buttonStyle='numButton' />
          <NumberButton text='9' buttonStyle='numButton' />
          <ActionButton text='X' buttonStyle='actionButton' />
        </div>
        <div className='row2'>
          <NumberButton text='4' buttonStyle='numButton' />
          <NumberButton text='5' buttonStyle='numButton' />
          <NumberButton text='6' buttonStyle='numButton' />
          <ActionButton text='-' buttonStyle='actionButton' />
        </div>
        <div className='row3'>
          <NumberButton text='1' buttonStyle='numButton' />
          <NumberButton text='2' buttonStyle='numButton' />
          <NumberButton text='3' buttonStyle='numButton' />
          <ActionButton text='+' buttonStyle='actionButton' />
        </div>
        <ActionButton text='0' buttonStyle='rectangle' />
        <ActionButton text='=' buttonStyle='actionButton' />
      </div>
    </div>
  );
}
// const App = () => {
//   return (
//     <div>
//       <h3>Welcome to React Calculator</h3>
//       <p>
//         We have given you a starter project. You'll want to build out your
//         components in their respective files, remove this code and replace it
//         with the proper components.
//       </p>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p>
//     </div>
//   );
// };

export default App;
