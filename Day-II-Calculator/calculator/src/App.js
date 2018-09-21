import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

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
      <div className="row">
        <NumberButton number="1" />
        <NumberButton number="2" />
        <NumberButton number="3" />
        <ActionButton number="-" />
      </div>

      <div className="row">
        <NumberButton number="4" />
        <NumberButton number="5" />
        <NumberButton number="6" />
      </div>

      <div className="row">
        <NumberButton number="7" />
        <NumberButton number="8" />
        <NumberButton number="9" />
      </div>

      <div className="row">
        <NumberButton number="0" />
      </div>
    </div>
  );
};

export default App;
