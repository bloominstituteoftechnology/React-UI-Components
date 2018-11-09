import React from 'react';
//import './Button.css';

function NumberButton(props) {
  let className = 'number';
  if (props.large) {
  	className += ' large';
  }

  return (
	<React.Fragment>
    	<button className={className} onClick={props.onClick} >{props.number}</button>

    </React.Fragment>
  );
}

export default NumberButton;