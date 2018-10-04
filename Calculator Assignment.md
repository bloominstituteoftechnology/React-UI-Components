MVP is to design the calculator layout using reusable components (keys)
*** HINT *** use the workflow studying Thursday in React Basic Notes

action buttons divide multiply subtract add 

Workflows
NumberButton.js
make number buttons
const NumberButton = () => {
  // prop.displayNumber === 1
  return <div> I am a number button.</div>
}
export default NumberButton;

App.js
import Number Button from './components/ButtonComponents/NumberButton'

Grab app.js file

display at the bottom NumberButton

## App.js Code
import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'

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
      <NumberButton />
      <App />
    </div>
  );
};

export default App;