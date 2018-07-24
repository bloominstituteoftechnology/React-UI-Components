import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div class='container'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <NumberButton text='+' />
      </div>
      
      
    </div>
  );
};

export default App;
