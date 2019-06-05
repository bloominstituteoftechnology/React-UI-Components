import React from 'react';
import './Button.css';

function ButtonBox (props) {
    return (
        <div className="button-box">{props.children}</div>
    );
};export default ButtonBox;