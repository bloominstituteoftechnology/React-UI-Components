import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div>
      <div>
        <NumberButton displayStyle="Button" text="7" />
        <NumberButton displayStyle="Button" text="8" />
        <NumberButton displayStyle="Button" text="9" />
      </div>
      <div>
        <NumberButton displayStyle="Button" text="4" />
        <NumberButton displayStyle="Button" text="5" />
        <NumberButton displayStyle="Button" text="6" />
      </div>
      <div>
        <NumberButton displayStyle="Button" text="1" />
        <NumberButton displayStyle="Button" text="2" />
        <NumberButton displayStyle="Button" text="3" />
      </div>
    </div>
  );
};

export default App;
