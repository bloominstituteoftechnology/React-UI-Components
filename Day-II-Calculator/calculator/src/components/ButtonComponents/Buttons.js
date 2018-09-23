import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';



const Buttons = () => {
	return (
        <div className="buttons">
			<div className="line">
        		<ActionButton buttonStyle="button clear" text="clear" />
        		<NumberButton buttonStyle="button action divison" text = "÷" />
      		</div>
      		<div className="line">
        		<NumberButton text="7" />
        		<NumberButton text="8" />
        		<NumberButton text="9" />
        		<NumberButton buttonStyle="button action multiplication" text="×" />
      		</div>
      		<div className="line">
        		<NumberButton text="4" />
        		<NumberButton text="5" />
        		<NumberButton text="6" />
        		<NumberButton buttonStyle="button action minus" text="—" />
      		</div>
      		<div className="line">
        		<NumberButton text="1" />
        		<NumberButton text="2" />
        		<NumberButton text="3" />
        		<NumberButton buttonStyle="button action plus" text="+" />
      		</div>
      		<div className="line">
        		<ActionButton buttonStyle="button zero" text="0" />
        		<NumberButton buttonStyle="button action equals" text="=" />
			</div>
    	</div>
	)
};

export default Buttons;