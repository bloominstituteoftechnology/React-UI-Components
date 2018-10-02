import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import Display from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div class="container">
      <Display displayNumb = '0'/>
      <div class="buttonContainer">
        <NumberButton />
        <ActionButton />
      </div>
</div>
  );
};
export default App;
