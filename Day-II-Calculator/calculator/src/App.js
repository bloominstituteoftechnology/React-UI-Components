import React from 'react';
import './App.css';
import ButtonFactory from './components/ButtonComponents/ButtonFactory';

const App = () => {
  return (
    <div className='container'>
      <ButtonFactory />
      <ButtonFactory />
      <ButtonFactory />
      <ButtonFactory />
    </div>

  );
};

export default App;
