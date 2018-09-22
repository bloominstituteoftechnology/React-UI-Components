import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <NumberButton buttonStyle="number" text="7" />
      <NumberButton buttonStyle="number" text="8" />
      <NumberButton buttonStyle="number" text="9" />
      <NumberButton buttonStyle="number" text="4" />
      <NumberButton buttonStyle="number" text="5" />
      <NumberButton buttonStyle="number" text="6" />
      <NumberButton buttonStyle="number" text="1" />
      <NumberButton buttonStyle="number" text="2" />
      <NumberButton buttonStyle="number" text="3" />

    </div>
  );
};

export default App;
