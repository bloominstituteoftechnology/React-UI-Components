import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div>
      <div>
        <NumberButton buttonStyle={'number'} text={'7'} />
        <NumberButton buttonStyle={'number'} text={'8'} />
        <NumberButton buttonStyle={'number'} text={'9'} />
      </div>
      <div>
        <NumberButton buttonStyle={'number'} text={'4'} />
        <NumberButton buttonStyle={'number'} text={'5'} />
        <NumberButton buttonStyle={'number'} text={'6'} />
      </div>
      <div>
        <NumberButton buttonStyle={'number'} text={'1'} />
        <NumberButton buttonStyle={'number'} text={'2'} />
        <NumberButton buttonStyle={'number'} text={'3'} />
      </div>


    </div>
  );
};

export default App;
