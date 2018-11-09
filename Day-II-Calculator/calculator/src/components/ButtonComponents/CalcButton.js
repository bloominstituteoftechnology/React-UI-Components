import React from 'react';

function handler(label, onClick) {
	return () => onClick(label);
}

function CalcButton(props) {
  let className = 'calc-button';
  if (props.large) {
  	className += ' large';
  }

  return (
	<React.Fragment>
    	<button className={className} onClick={handler(props.label, props.onClick)} >{props.label}</button>
    </React.Fragment>
  );
}

export default CalcButton;