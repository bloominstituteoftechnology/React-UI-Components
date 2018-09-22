import React from 'react';
import './App.css';
import {Display} from './components/DisplayComponents/CalculatorDisplay';
import NumberDisplay from './components/ButtonComponents/NumberDisplay';

const App = () => {
  return (
      <div className="app-content">
        
          <Display />
          <NumberDisplay />
  
      </div>
  )

}

export default App;
