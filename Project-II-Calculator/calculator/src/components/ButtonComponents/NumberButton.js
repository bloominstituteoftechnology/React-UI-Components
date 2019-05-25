import React from 'react';
import './Button.css';

const NumberButton = (props) => {
 return (
   <div>
    <button className={`${props.buttonStyle}`}> {`${props.text}`} </button>
   </div>
 );
}


export default NumberButton;
// Create a <NumberButton /> component that can accept props and display any number/symbol passed down as text.

// Example your component should be able to render a dynamic prop called text:

// Your button button should also be able to accept dynamic props buttonStyle for styling

// <button className={props.buttonStyle}>{props.text}</button>
