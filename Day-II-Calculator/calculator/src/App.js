import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import ClearButton from './components/ButtonComponents/ClearButton.js';
import ZeroButton from './components/ButtonComponents/ZeroButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
	return (
    <div>
      <div>
        <CalculatorDisplay buttonStyle={'number'} text={'0'}/>
      </div>
      <div>
        <ClearButton buttonStyle={'clear'} text={'Clear'}/>
      </div>
      <div>
        <ActionButton buttonStyle={'action'} text={'%'}/>
        <ActionButton buttonStyle={'action'} text={'x'}/>
        <ActionButton buttonStyle={'action'} text={'-'}/>
        <ActionButton buttonStyle={'action'} text={'+'}/>
        <ActionButton buttonStyle={'action'} text={'='}/>
      </div> 
      <div>
		    <NumberButton buttonStyle={'number'} text={'7'}/>
		    <NumberButton buttonStyle={'number'} text={'8'}/>
		    <NumberButton buttonStyle={'number'} text={'9'}/>
		    <NumberButton buttonStyle={'number'} text={'4'}/>
		    <NumberButton buttonStyle={'number'} text={'5'}/>
		    <NumberButton buttonStyle={'number'} text={'6'}/>
		    <NumberButton buttonStyle={'number'} text={'1'}/>
		    <NumberButton buttonStyle={'number'} text={'2'}/>
		    <NumberButton buttonStyle={'number'} text={'3'}/>
      </div>  
      <div>
        <ZeroButton buttonStyle={'clear'} text={'0'}/>
      </div>
    </div>  
	);
};

export default App;
