import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';

import NumberButton from './components/ButtonComponents/NumberButton';

import LargeButton from './components/ButtonComponents/LargeButton';


const App = () => {
  return (
    <div className="app-container">
      <LargeButton name="clear" />
      <div className="nums">
      <NumberButton name="7" />
      <NumberButton name="8" />
      <NumberButton name="9" />
      <NumberButton name="4" />
      <NumberButton name="5" />
      <NumberButton name="6" />
      <NumberButton name="1" />
      <NumberButton name="2" />
      <NumberButton name="3" />
      </div>

      <LargeButton name="0" />

      <div class="action-group">

      <ActionButton name="÷" />
      <ActionButton name="X"/>
      <ActionButton name="–"/>
      <ActionButton name="+"/>
      <ActionButton name="="/>
      </div>


    </div>
  );
};

export default App;
