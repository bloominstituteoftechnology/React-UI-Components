import React from 'react';
// import './Button.css';


const NumberButton = props => {
    return (
        <div className={props.className} 
        onClick={props.handleClick}>
          {props.number}
        </div>
    )
}

export default NumberButton;