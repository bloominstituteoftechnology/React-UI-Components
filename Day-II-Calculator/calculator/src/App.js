import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const buttons = [
  {

  }
]

const App = () => {
  return (
    <div className="App">
    <CalculatorDisplay />
      <p>clear &#247;</p>
      <p>7 8 9 &#215;</p>
      <p>4 5 6 &#8722;</p>
      <p>1 2 3 &#43;</p>
      <p>0 &#61;</p>
    </div>
  );
};

export default App;
