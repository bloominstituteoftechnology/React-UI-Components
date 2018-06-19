import React from 'react';
import './App.css';
import OperationGrid from './components/ButtonComponents/OperationGrid';
import InputGrid from './components/ButtonComponents/InputGrid';
const App = () => {
  return (
    <div>
      <div className="buttons">
        <InputGrid />
        <OperationGrid />
      </div>
    </div>
  );
};

export default App;
