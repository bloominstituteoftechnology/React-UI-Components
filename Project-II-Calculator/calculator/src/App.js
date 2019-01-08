import React from 'react';
import './App.css';
import Result from './components/ButtonComponents/Result';

import NumberButton from '../src/components/ButtonComponents/NumberButton'



const NumbersObj = {
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
  num5: 5,
  num6: 6,
  num7: 7,
  num8: 8,
  num9: 9
}

const App = () => {
  return (
    <div>
      <Result />
      <NumberButton num={NumbersObj.num1} />
      <NumberButton num={NumbersObj.num2} />
      <NumberButton num={NumbersObj.num3} />
      <NumberButton num={NumbersObj.num4} />
      <NumberButton num={NumbersObj.num5} />
      <NumberButton num={NumbersObj.num6} />
      <NumberButton num={NumbersObj.num7} />
      <NumberButton num={NumbersObj.num8} />
      <NumberButton num={NumbersObj.num9} />
    </div>
  );
};

export default App;
