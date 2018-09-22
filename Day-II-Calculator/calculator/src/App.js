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
        <CalculatorDisplay />
      </div>
      <div className="buttons">
        <ClearButton buttonStyle={'clear'} text={'Clear'}/>
        <ActionButton buttonStyle={'action'} text={'%'}/>
        <NumberButton buttonStyle={'number'} text={'7'}/>
		    <NumberButton buttonStyle={'number'} text={'8'}/>
		    <NumberButton buttonStyle={'number'} text={'9'}/>
        <ActionButton buttonStyle={'action'} text={'x'}/>
        <NumberButton buttonStyle={'number'} text={'4'}/>
		    <NumberButton buttonStyle={'number'} text={'5'}/>
		    <NumberButton buttonStyle={'number'} text={'6'}/>
        <ActionButton buttonStyle={'action'} text={'-'}/>
        <NumberButton buttonStyle={'number'} text={'1'}/>
		    <NumberButton buttonStyle={'number'} text={'2'}/>
		    <NumberButton buttonStyle={'number'} text={'3'}/>
        <ActionButton buttonStyle={'action'} text={'+'}/>
        <ZeroButton buttonStyle={'clear'} text={'0'}/>
        <ActionButton buttonStyle={'action'} text={'='}/>
      </div>
    </div>  
	);
};

export default App;
