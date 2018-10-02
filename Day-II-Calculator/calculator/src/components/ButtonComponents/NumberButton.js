import React from 'react';
import './Button.css';

function ButtonDisplay (props) { // props = { type: "primary"}

    return (
      <div class = 'button-display'> 
        <button className ={props.buttononprops.style}>{props.buttononprops.id}</button>
      </div>
    );
}

export default ButtonDisplay;

//Create a <NumberButton /> component that can accept props and display any number/symbol passed down as text.
//Example your component should be able to render a dynamic prop called text:
// Your button button should also be able to accept dynamic props buttonStyle for styling
// <button className={props.buttonStyle}>{props.text}</button>
// Create an <ActionButton /> component that will be used for the zero character and the clear button.
// Create a <CalculatorDisplay /> component that will be used as the calculator display