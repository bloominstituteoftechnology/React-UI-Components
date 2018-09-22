import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div>
      <NumberButton buttonStyle={'number'} text={'7'} />
    </div>
  );
};

export default App;
