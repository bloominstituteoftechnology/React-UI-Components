import React from 'react';
import './App.css';
import NumberButtonContainer from './components/ButtonComponents/NumberButtonContainer';
import ActionButtonContainer from './components/ButtonComponents/ActionButtonContainer';

const App = () => {
  return (
    <div className="app-container">
      <NumberButtonContainer />
      <ActionButtonContainer />
    </div>
  );
};

export default App;
