import React from 'react';
import './App.css';
import DisplayContainer from './components/DisplayComponents/DisplayContainer';
import ClearContainer from './components/ButtonComponents/ClearContainer';
import NumberContainer from './components/ButtonComponents/NumberContainer';
import CeroContainer from './components/ButtonComponents/CeroContainer';

const App = () => {
  return (
    <div className="main-container">
      Main container
      <DisplayContainer />
      <ClearContainer />
      <NumberContainer />
      <CeroContainer />
    </div>
  );
};

export default App;
