import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
        <CalculatorDisplay text="0"/>
        <NumberButton text="clear" btncolor="white" btnsize="widebtn"/>
        <NumberButton text= {<i class='fas fa-divide'></i>} btncolor="red"/>
        <NumberButton text="7" btncolor="white"/>
        <NumberButton text="8" btncolor="white"/>
        <NumberButton text="9" btncolor="white"/>
        <NumberButton text={<i class="fas fa-times"></i>} btncolor="red"/>
        <NumberButton text="4" btncolor="white"/>
        <NumberButton text="5" btncolor="white"/>
        <NumberButton text="6" btncolor="white"/>
        <NumberButton text={<i class="fas fa-minus"></i>} btncolor="red"/>
        <NumberButton text="1" btncolor="white"/>
        <NumberButton text="2" btncolor="white"/>
        <NumberButton text="3" btncolor="white"/>
        <NumberButton text={<i class="fas fa-plus"></i>} btncolor="red"/>
        <NumberButton text="0" btncolor="white" btnsize="widebtn"/>
        <NumberButton text={<i class="fas fa-equals"></i>} btncolor="red"/>
      
    </div>
  );
};

export default App;
