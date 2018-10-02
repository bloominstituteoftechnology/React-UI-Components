import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import WhiteBtn from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <div className='right-container'>
        <WhiteBtn />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
