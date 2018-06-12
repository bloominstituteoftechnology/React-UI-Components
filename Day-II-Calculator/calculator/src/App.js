import React from 'react';
import './App.css';
import Buttons from './components/ButtonComponents/NumberButton.js';
import Funcs from './components/ButtonComponents/ActionButton.js';
import Screen from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className='container'>
      <Screen onChange={screenChange} text={screen} />
        <div className='user'>
          <Buttons className='col1' />
          <Funcs className='col2'/>
    </div>
  </div>
  );
};

export default App;