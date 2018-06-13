import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    console.log('NumberButton props: ', props)
  
    return (
        <button className={props.customStyle} onClick={props.onClickCust}>{props.text}</button>
    )
}

export default NumberButton;