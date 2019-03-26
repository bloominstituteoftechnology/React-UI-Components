import React from 'react';
import './App.css';
import ActionButton from "../src/components/ButtonComponents/ActionButton";
// import NumberButton from "../src/components/ButtonComponents/NumberButton

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <ActionButton />
      
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
    </div>
  );
};

export default App;
