import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.actionButtonStyle}>{props.text}</button>
    );
}

ActionButton.defaultProps = {
    actionButtonStyle: 'action-button-style'
}

export default ActionButton;