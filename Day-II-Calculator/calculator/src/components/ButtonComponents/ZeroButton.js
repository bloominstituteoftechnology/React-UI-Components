import React from 'react';
import './Button.css';

const ZeroButton = (props) => {
    return (
        <div className={props.displayStyle}>
            {props.text.numArray[0]}
        </div>
    );
};

export default ZeroButton;

