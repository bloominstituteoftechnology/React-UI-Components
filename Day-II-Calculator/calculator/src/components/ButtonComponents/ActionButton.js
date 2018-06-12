import React from 'react';
import './Button.css';

const ActionButton = props => {
    return ( <button className = {
            `numbers ${props.customStyleProp}`
        } > {
            props.text
        } </button> 

    );
};

export default ActionButton;