import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
	<CalculatorDisplay value="0" />	
	<ActionButton value="clear" customClass="default-button clear-button" />
	<ActionButton value="&divide;" customClass="default-button operator-button" />
	<NumberButton value="7" customClass="default-button number-button" />
	<NumberButton value="8" customClass="default-button number-button" />
	<NumberButton value="9" customClass="default-button number-button" />
	<ActionButton value="&times;" customClass="default-button operator-button" />
	<NumberButton value="4" customClass="default-button number-button" />
	<NumberButton value="5" customClass="default-button number-button" />
	<NumberButton value="6" customClass="default-button number-button" />
	<ActionButton value="&minus;" customClass="default-button operator-button" />
	<NumberButton value="1" customClass="default-button number-button" />
	<NumberButton value="2" customClass="default-button number-button" />
	<NumberButton value="3" customClass="default-button number-button" />
	<ActionButton value="+" customClass="default-button operator-button" />
	<NumberButton value="0" customClass="default-button zero-button" />
	<ActionButton value="=" customClass="default-button operator-button" />
	
    </div>
  );
};

export default App;
