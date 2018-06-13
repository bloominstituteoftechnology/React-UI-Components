import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';


class App extends React.Component  {
	render () {
  	return (
	    <div className="main-container">
	    	<div className ="big-zero">
	    		<CalculatorDisplay name="0" />
	    	</div>
			<div className="number-container">
	    	<div className = "row1">
		    	<ActionButton buttonStyles="action-button clear-button" text="clear"/>
		    	<ActionButton buttonStyles="action-button" text="/" />
	    	</div>

	    	<div className = "row2">
	    	<NumberButton buttonStyles="number-button" text="7"/>
	    	<NumberButton buttonStyles="number-button" text="8"/>
	    	<NumberButton buttonStyles="number-button" text="9"/>
	    	<ActionButton buttonStyles="action-button" text="X"/>
	    	</div>

	    	<div className = "row3">
	    	<NumberButton buttonStyles="number-button" text="4"/>
	    	<NumberButton buttonStyles="number-button" text="5"/>
	    	<NumberButton buttonStyles="number-button" text="6"/>
				<ActionButton buttonStyles="action-button" text="-"/>
	    	</div>

	    	<div className = "row4">
	    	<NumberButton buttonStyles="number-button" text="3"/>
	    	<NumberButton buttonStyles="number-button" text="2"/>
	    	<NumberButton buttonStyles="number-button" text="1"/>
	    	<ActionButton buttonStyles="action-button" text="+"/>
	  		</div>

	 			<div className = "row5">
	    	<NumberButton buttonStyles="number-button zero-button" text="0"/>
	    	<ActionButton buttonStyles="action-button" text="="/>
	    	</div>
	    </div>
	    </div>
  	);
	};
};

export default App;
