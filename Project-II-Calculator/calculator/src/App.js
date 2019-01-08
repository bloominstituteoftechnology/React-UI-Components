import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButtonContainer from './components/ButtonComponents/NumberButtonContainer'

const App = () => {
  return (
    <div className="container">
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
      <CalculatorDisplay />
      <NumberButtonContainer />

    </div>
  );
};

export default App;
