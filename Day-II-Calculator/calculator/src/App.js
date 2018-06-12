import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <NumberButton name="7" />
      <NumberButton name="8" />
      <NumberButton name="9" />
      <NumberButton name="4" />
      <NumberButton name="5" />
      <NumberButton name="6" />
      <NumberButton name="1" />
      <NumberButton name="2" />
      <NumberButton name="3" />
    </div>
  );
};

export default App;
