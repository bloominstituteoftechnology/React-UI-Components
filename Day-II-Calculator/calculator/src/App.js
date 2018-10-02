import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton.js';
const App = () => {
  return (
    <div class="container">

    <div className="row">
    <NumberButton text="9" />
    <NumberButton text="9" />
    <NumberButton text="9" />
    <NumberButton text="9" buttonStyle="red"/>
    </div>
    <div className="row"></div>
    <div className="row"></div>

    

    </div>
  );
};

export default App;
