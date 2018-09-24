import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButton from "./components/ButtonComponents/ActionButton"

const App = () => {
  return (
    <div>
      <div class="numbers">
        <NumberButton buttonStyle={'number'} text={'0'}/>
        <NumberButton buttonStyle={'number'} text={'1'}/>
        <NumberButton buttonStyle={'number'} text={'2'}/>
        <NumberButton buttonStyle={'number'} text={'3'}/>
        <NumberButton buttonStyle={'number'} text={'4'}/>
        <NumberButton buttonStyle={'number'} text={'5'}/>
        <NumberButton buttonStyle={'number'} text={'6'}/>
        <NumberButton buttonStyle={'number'} text={'7'}/>
        <NumberButton buttonStyle={'number'} text={'8'}/>
        <NumberButton buttonStyle={'number'} text={'9'}/>
      </div>
      <div class='actions'>
        <ActionButton buttonStyle={'action'} text={'+'}/>
        <ActionButton buttonStyle={'action'} text={'-'}/>
        <ActionButton buttonStyle={'action'} text={'*'}/>
        <ActionButton buttonStyle={'action'} text={'/'}/>
        <ActionButton buttonStyle={'action'} text={'Clear'}/>
      </div>
    </div>
  );
};

export default App;
