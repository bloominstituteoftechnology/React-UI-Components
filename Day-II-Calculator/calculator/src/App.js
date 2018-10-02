import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className='container'>
      <NumberButton />
      <ActionButton />
    </div>
  );
};

export default App;
