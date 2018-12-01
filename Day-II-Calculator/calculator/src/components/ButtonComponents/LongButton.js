import React from 'react';
import './Button.css';

const LongButton = (props) => {
    return (
        <button className="lngButton">
        {props.text}
        </button>
    )
}

export default LongButton;