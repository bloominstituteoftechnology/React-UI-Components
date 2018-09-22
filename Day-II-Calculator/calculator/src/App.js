import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
    <NumberButton num={1} className='one' />
    <NumberButton num={0} className='zero' />
    </div>
  );
};

export default App;


