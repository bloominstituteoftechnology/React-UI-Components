import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className="{props.buttonStyle} action-button">
            {props.text}
        </button>
    );
};

ActionButton.defaultProps = {
    text: 'Default Text'
};

export default ActionButton;