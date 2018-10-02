import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'



const App = () => {
  return (
    <div className = "app">
      
      
      {/*Calculator Display first row for answer*/}
      <div>
          <CalculatorDisplay />
      </div>

      {/*Calculator second row : clear and divide button*/}
      <div>
          <ActionButton name="clear" />
          <NumberButton buttonStyles = "red" name="/" />
      </div>

    {/*Calculator third row : 7, 8, 9 button*/}
      <div>
          <NumberButton  name="7" />
          <NumberButton  name="8" />
          <NumberButton  name="9" />
          <NumberButton buttonStyles = "red" name="x" />
      </div>

    {/*Calculator forth row : 4, 5, 6 button*/}
      <div>
          <NumberButton  name="4" />
          <NumberButton  name="5" />
          <NumberButton  name="6" />
          <NumberButton buttonStyles = "red" name="-" />
      </div>

    {/*Calculator fifth row : 1, 2, 3 button*/}
      <div>
          <NumberButton  name="1" />
          <NumberButton  name="2" />
          <NumberButton  name="3" />
          <NumberButton buttonStyles = "red" name="+" />
      </div>

    {/*Calculator last row : 0 and = button*/}
      <div>
          <ActionButton name="0" />
          <NumberButton buttonStyles = "red" name="=" />
      </div>


    </div>
  );
};

export default App;
