import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
	 console.log(props);
	  return (<div className="display"><span className={props.padding}>{props.value}</span></div>);
};

CalculatorDisplay.defaultProps = {
	 value:0
}
export default CalculatorDisplay;