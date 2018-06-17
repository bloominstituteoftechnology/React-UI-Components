import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    console.log('ActionButton props: ', props)
    return (
        <button className={`box ${props.customStyle}`}>{props.text}</button>
    )
}

export default ActionButton;