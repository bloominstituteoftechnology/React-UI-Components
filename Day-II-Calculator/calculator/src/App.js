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
          <ActionButton className="clear" text="clear" />
          <NumberButton color="red" text="/" />
        </div>
        <div>
          <NumberButton color="number" text="7" />
          <NumberButton color="number" text="8" />
          <NumberButton color="number" text="9" />
          <NumberButton color="red" text="*" />
        </div>
        <div>
          <NumberButton color="number" text="4" />
          <NumberButton color="number" text="5" />
          <NumberButton color="number" text="6" />
          <NumberButton color="red" text="-" />
        </div>
        <div>
          <NumberButton color="number" text="1" />
          <NumberButton color="number" text="2" />
          <NumberButton color="number" text="3" />
          <NumberButton color="red" text="+" />
        </div>
        <div>
          <ActionButton className="zero" text="0" />
          <NumberButton color="red" text="=" />
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
