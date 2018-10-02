import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberBtns from './components/ButtonComponents/NumberButton';
import ActionButtons from './components/ButtonComponents/ActionButton';
import ActionButton from './components/ButtonComponents/ActionButton2';
const App = () => {
  return (
    <div className="calculator">
      <Display displayedNumber={NumberBtns.numberbtn}/>
      <div className="btn-section">
        <div className="left-side">
          <ActionButton name={"clear"} />
          <div className="number-div">
            <NumberBtns numberbtn = {7} />
            <NumberBtns numberbtn = {8} />
            <NumberBtns numberbtn = {9} />
            <NumberBtns numberbtn = {4} />
            <NumberBtns numberbtn = {5} />
            <NumberBtns numberbtn = {6} />
            <NumberBtns numberbtn = {1} />
            <NumberBtns numberbtn = {2} />
            <NumberBtns numberbtn = {3} />
            <ActionButton name={0} />
          </div>
        </div>
        <ActionButtons />
      </div>
    </div>
  );
};

export default App;
