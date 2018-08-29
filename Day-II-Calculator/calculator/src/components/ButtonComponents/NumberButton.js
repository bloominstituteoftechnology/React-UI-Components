import React from 'react';
import './Button.css';

const GreyButton = (props) => {
    return (
        <div className={`${props.type}`}>{`${props.text}`}</div>
    );
}

export default GreyButton;