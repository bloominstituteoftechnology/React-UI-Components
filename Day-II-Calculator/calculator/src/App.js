import React from 'react';
import './App.css';
import NumBut from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearBut from './components/ButtonComponents/ClearButton';


const App = () => {
  return (
    <div class="container">
      <div class="display">0</div>
      <div class="buttonContent">
        <div class="numsDiv">

          <div class="belowCont">

            <div class="numsClear">
              <div class="zeroClear" id="clear"><ClearBut buttonText="clear" /></div>
              <div class="buttons">

                <NumBut buttonText="1" />
                <NumBut buttonText="2" />
                <NumBut buttonText="3" />
                <NumBut buttonText="4" />
                <NumBut buttonText="5" />
                <NumBut buttonText="6" />
                <NumBut buttonText="7" />
                <NumBut buttonText="8" />
                <NumBut buttonText="9" />

              </div>
              <div class="zeroClear"><NumBut buttonText="0" /></div>
            </div>


            <div class="actionButtons">
              <ActionButton buttonText="÷" />
              <ActionButton buttonText="x" />
              <ActionButton buttonText="-" />
              <ActionButton buttonText="+" />
              <ActionButton buttonText="=" />
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default App;
