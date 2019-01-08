import React from 'react';
import './App.css';
import SymbolButton from './components/ButtonComponents/SymbolButton.js';

const App = () => {
  return (
    <div className="container">
      <div className="display">
      </div>
      <div className="buttons">
        <div className="left-side">
        </div>
        <div className="right-side">
          <SymbolButton/>
        </div>
      </div>
    </div>
  );
};

export default App;
