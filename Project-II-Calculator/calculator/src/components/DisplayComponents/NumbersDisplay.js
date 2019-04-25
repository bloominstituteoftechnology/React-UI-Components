import React from 'react';
import './Display.scss';
import NumberButton from '../ButtonComponents/NumberButton';


const Numbers = ["clear",7,8,9,4,5,6,1,2,3,0];

const NumbersDisplay = (props) => {
  return (
     
    Numbers.map(number => {
        return <NumberButton text={number} buttonStyle="numberButton" />;
    })
    
  );
}

export default NumbersDisplay;

