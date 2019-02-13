import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
       <div className="num-button" >
       <NumberButton className="seven" text="7" />
       <NumberButton className="eight" text="8" />
       <NumberButton className="nine" text="9" />
        </div> 

        <div className="num-button" >
        <NumberButton className="four" text="4" />
        <NumberButton className="five" text="5" />
        <NumberButton className="six" text="6" />
        </div> 
        <div className="num-button" >
        <NumberButton className="one" text="1" />
        <NumberButton className="two" text="2" />
        <NumberButton className="three" text="3" />
        </div> 
    );
};
  
  export default NumberButton;
