import React from 'react';
//import './Button.css';

function NumberButton(props) {
  let className = 'number';
  if (props.large) {
  	className += ' number-large';
  }
  return (
    
	<React.Fragment>
    	<div className={className}>{props.number}</div>
    </React.Fragment>

  );
}

export default NumberButton;