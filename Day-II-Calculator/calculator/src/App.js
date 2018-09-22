import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/NumberButton.js';


const App = () => {
  return (
        <div className="container">

          <div>
            <ActionButton buttonStyle={'action'} text={'Clear'} />
          </div>

          <div>
            <NumberButton buttonStyle={'number'} text={'7'} />
            <NumberButton buttonStyle={'number'} text={'8'} />
            <NumberButton buttonStyle={'number'} text={'9'} />
            <NumberButton buttonStyle={'redNumber'} text={'X'} />
          </div>
          <div>
            <NumberButton buttonStyle={'number'} text={'4'} />
            <NumberButton buttonStyle={'number'} text={'5'} />
            <NumberButton buttonStyle={'number'} text={'6'} />
            <NumberButton buttonStyle={'redNumber'} text={'-'} />
          </div>
          <div>
            <NumberButton buttonStyle={'number'} text={'1'} />
            <NumberButton buttonStyle={'number'} text={'2'} />
            <NumberButton buttonStyle={'number'} text={'3'} />
            <NumberButton buttonStyle={'redNumber'} text={'+'} />
          </div>
          <div>
            <ActionButton buttonStyle={'action'} text={'0'} />
          </div>

        </div>
      );
    };
export default App;