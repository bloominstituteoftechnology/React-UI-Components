import React from 'react';
import CalcButton from './CalcButton';

const buttonLabels = ['Clear','÷',1,2,3,'×',4,5,6,'-',7,8,9,'+',0,'='];

function isLarge(label){
	return label === 'Clear' || label === 0;
}

function CalcButtonsContainer(props) {
  return (
     <div className="calc-buttons-container">
      {buttonLabels.map(label => <CalcButton key={label} large={isLarge(label)} onClick={props.onClick} label={label} />)}
    </div>
  );
}

export default CalcButtonsContainer;