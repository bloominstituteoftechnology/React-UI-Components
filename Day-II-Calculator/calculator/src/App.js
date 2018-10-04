import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import FullDisplayButton from './components/ButtonComponents/FullDisplayButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay num={0}/>
      <div className="buttons">
        <div className="Number-Buttons">
          <FullDisplayButton text="clear" />
          <NumberButton num={7} />
          <NumberButton num={8} />
          <NumberButton num={9} />
          <NumberButton num={4} />
          <NumberButton num={5} />
          <NumberButton num={6} />
          <NumberButton num={1} />
          <NumberButton num={2} />
          <NumberButton num={3} />
          <FullDisplayButton text="0"/>
        </div>
        <div className="Action-Buttons">
          <ActionButton type="/" />
          <ActionButton type="X" />
          <ActionButton type="-" />
          <ActionButton type="+" />
          <ActionButton type="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
