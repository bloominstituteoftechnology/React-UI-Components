import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="main-container">
      <ActionButton actionStyle="button-clear" text="clear"/>
      <NumberButton buttonStyle="number-button" text="7" />
      <NumberButton buttonStyle="number-button" text="8" />
      <NumberButton buttonStyle="number-button" text="9" />
      <NumberButton buttonStyle="number-button" text="4" />
      <NumberButton buttonStyle="number-button" text="5" />
      <NumberButton buttonStyle="number-button" text="6" />
      <NumberButton buttonStyle="number-button" text="1" />
      <NumberButton buttonStyle="number-button" text="2" />
      <NumberButton buttonStyle="number-button" text="3" />
      <div>
      <ActionButton actionStyle="action-button" text="&#xf7;" />
      <ActionButton actionStyle="action-button" text="&#xd7;" />
      <ActionButton actionStyle="action-button" text="&#x2212;" />
      <ActionButton actionStyle="action-button" text="&#x2b;" />
      <ActionButton actionStyle="action-button" text="&#x3d;" />
      </div>
    </div>
  );
};

export default App;
