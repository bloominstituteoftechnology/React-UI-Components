import React from 'react';
import './App.css';
import DisplayContainer from './components/DisplayComponents/DisplayContainer';
import NumbersContainer from './components/ButtonComponents/NumbersContainer';
import ActionsContainer from './components/ButtonComponents/ActionsContainer';

const App = () => {
  return (
    <div className='container'>
      <DisplayContainer />
      <NumbersContainer />
      <ActionsContainer />
    </div>
  );
};

export default App;
