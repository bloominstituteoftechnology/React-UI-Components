import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

NumberButton.defaultProps = {
  number: `1`
}

const App = () => {
  return (
    <div>
      <NumberButton customClass="black-btn" number="0" />
      <br />
      <NumberButton customClass="clear-btn" number="clear" />
      <ActionButton customClass="action-btn" action="÷" />
      <br />
      <NumberButton customClass="number-btn" number="7" />
      <NumberButton customClass="number-btn" number="8" />
      <NumberButton customClass="number-btn" number="9" />
      <ActionButton customClass="action-btn" action="x" />
      <br />
      <NumberButton customClass="number-btn" number="4" />
      <NumberButton customClass="number-btn" number="5" />
      <NumberButton customClass="number-btn" number="6" />
      <ActionButton customClass="action-btn" action="-" />
      <br />
      <NumberButton customClass="number-btn" number="1" />
      <NumberButton customClass="number-btn" number="2" />
      <NumberButton customClass="number-btn" number="3" />
      <ActionButton customClass="action-btn" action="+" />
      <br />
      <NumberButton customClass="white-btn" number="0" />
      <ActionButton customClass="action-btn" action="=" />

    </div>
  );
};

export default App;
