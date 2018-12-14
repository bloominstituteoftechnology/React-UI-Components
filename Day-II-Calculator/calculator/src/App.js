import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

class App extends React.Component {
  render () {
    return(
      <div className="calculator">
        <CalculatorDisplay />
        <div>
          <ActionButton text="clear" />
          <NumberButton text="/" />
        </div>
        <div>
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton text="*" />
        </div>
        <div>
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton text="-" />
        </div>
        <div>
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton text="+" />
        </div>
        <div>
          <ActionButton text="0" />
          <NumberButton text="=" />
        </div>
      </div>
    )
  }
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
