import React from 'react';
import './App.css';
import DisplayScreen from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const numbers = [
  { text: 9 },
  { text: 8 },
  { text: 7 },
  { text: 6 },
  { text: 5 },
  { text: 4 },
  { text: 3 },
  { text: 2 },
  { text: 1 },
]

const symbols = [
  { text: "/" },
  { text: "*" },
  { text: "_" },
  { text: "+" },
  { text: "=" },
]

const App = () => {
  return (
    <div className="container">
      <div className="card-container">
        <DisplayScreen />
        <ButtonContainer numbers={numbers} symbols={symbols} />
      </div>
    </div>
  );
};

export default App;
