import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import Display from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';


const App = () => {
  return (
    <div>
        <Display/>
        <div className='topRow'>
        <ActionButton buttonStyle={'topBottom'} text={'clear'}/>
        <NumberButton buttonStyle={'operator'} text={"\*"}/>
        </div>
        <div className='secondRow'>
        <NumberButton buttonStyle={'number'} text={'7'}/>
        <NumberButton buttonStyle={'number'} text={'8'}/>
        <NumberButton buttonStyle={'number'} text={'9'}/>
        <NumberButton buttonStyle={'operator'} text={'x'}/>
        </div>
        <div className='thirdRow'>
        <NumberButton buttonStyle={'number'} text={'4'}/>
        <NumberButton buttonStyle={'number'} text={'5'}/>
        <NumberButton buttonStyle={'number'} text={'6'}/>
        <NumberButton buttonStyle={'operator'} text={'-'}/>
        </div>
        <div className='fourthRow'>
        <NumberButton buttonStyle={'number'} text={'1'}/>
        <NumberButton buttonStyle={'number'} text={'2'}/>
        <NumberButton buttonStyle={'number'} text={'3'}/>
        <NumberButton buttonStyle={'operator'} text={'+'}/>
        </div>
        <div className='bottomRow'>
        <ActionButton buttonStyle={'topBottom'} text={'0'}/>
        <NumberButton buttonStyle={'operator'} text={'='}/>
        </div>
      </div>
  );
};

export default App;
