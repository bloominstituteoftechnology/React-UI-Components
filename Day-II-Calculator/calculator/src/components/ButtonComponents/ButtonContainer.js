import React from 'react';
import './Button.css';

const ButtonContainer = props => {
    return (
        <div className={'button-container ${props.className}'}>
        {props.children}
        {props.color}
        </div>
    );
};

export default ButtonContainer;
