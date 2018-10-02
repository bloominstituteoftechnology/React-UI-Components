import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  const buttonClick = (e) => {
    if (e.className.includes('clear')) {
      console.log(e);
      e.DisplayProps.number = 0;
    } if (e.className.includes('nine')) {
      e.DisplayProps.number = 9;
    } if (e.classname.includes('eight')) {

    }
  }

  return (
    <div>
      <CalculatorDisplay DisplayProp={} />
      <ActionButton onClick={buttonClick} />
    </div>
  );
};

export default App;
