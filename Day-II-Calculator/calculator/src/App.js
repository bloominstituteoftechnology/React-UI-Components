import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calc-container">
      {/* <h3>Welcome to React Calculator</h3>
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
      </p> */}

      <CalcDisplay />
      <ActionButton />
      <ActionButton defaultStyle="operator-action-btn"/>
      <ActionButton defaultStyle="operator-action-btn"/>
      <ActionButton defaultStyle="operator-action-btn"/>
      <ActionButton defaultStyle="operator-action-btn"/>
      <ActionButton defaultStyle="operator-action-btn"/>
    </div>
  );
};

export default App;
