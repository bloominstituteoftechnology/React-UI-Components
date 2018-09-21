import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <div className='app'>
    <Display displayNumber='0' />
    </div>
  );
};

export default App;