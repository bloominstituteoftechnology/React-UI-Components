import React from 'react';
import './styles/App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


// const App = () => {
//   return (
//     <div className= 'app-container'>
//       <CalculatorDisplay/>

//    < div className= 'display-btns'>
//       <NumberButton/>  
//      <ActionButton/> 
//      </div>
      
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />
      <NumberButton number="clear" buttonStyle="clear" />
      <ActionButton symbol="/" buttonStyle="action" />
      <NumberButton number="7" buttonStyle="number" />
      <NumberButton number="8" buttonStyle="number" />
      <NumberButton number="9" buttonStyle="number" />
      <ActionButton symbol="*" buttonStyle="action" />
      <NumberButton number="4" buttonStyle="number" />
      <NumberButton number="5" buttonStyle="number" />
      <NumberButton number="6" buttonStyle="number" />
      <ActionButton symbol="-" buttonStyle="action" />
      <NumberButton number="1" buttonStyle="number" />
      <NumberButton number="2" buttonStyle="number" />
      <NumberButton number="3" buttonStyle="number" />
      <ActionButton symbol="+" buttonStyle="action" />
      <NumberButton number="0" buttonStyle="zero" />
      <ActionButton symbol="=" buttonStyle="action" />
    </div>
  );
};

export default App;
