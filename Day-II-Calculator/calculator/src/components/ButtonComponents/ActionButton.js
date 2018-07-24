import React from 'react';

const ActionButton = props => {
    if (props.text === '0') {
        var classes =  'action-btn zero';
        var onClick = () => {};
    } else {
        var classes =  'action-btn clear';
        var onClick = () => {};
    }

    return (
        <span className={classes} onClick={onClick}>
            {props.text}
        </span>
    );
};

export default ActionButton;