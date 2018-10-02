import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import WhiteButtons from './components/ButtonComponents/NumberButton';
import RedButtons from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='cal-container'>
      <Display />
      <div className='btn-container'>
      <WhiteButtons />
      <RedButtons />
</div>
    </div>
  );
};

export default App;
