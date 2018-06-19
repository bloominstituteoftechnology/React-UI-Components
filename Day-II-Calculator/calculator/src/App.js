import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';

import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <h3>NUMBER GROUP</h3>
      <NumberButton name="7" />
      <NumberButton name="6" />
      <NumberButton name="5" />
      <NumberButton name="4" />
      <NumberButton name="3" />
      <NumberButton name="2" />
      <NumberButton name="1" />
      <NumberButton name="0" />

      <h3>ACTION GROUP</h3>
      <ActionButton name="clear" />
      <ActionButton name="÷" />
      <ActionButton name="X"/>
      <ActionButton name="–"/>
      <ActionButton name="+"/>
      <ActionButton name="="/>


    </div>
  );
};

export default App;
