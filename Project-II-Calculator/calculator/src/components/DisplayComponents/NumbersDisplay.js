import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';


const Numbers = [9,8,,7,6,5,4,3,2,1,0];

const NumbersDisplay = (props) => {
  return (
    Numbers.map(number => {
        return <NumberButton text={number}/>;
       
    })
  );}

export default NumbersDisplay;

