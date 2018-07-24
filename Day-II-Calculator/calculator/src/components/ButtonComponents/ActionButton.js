import React from 'react';

const ActionButton = props => {
    return (
        <span className={props.text === '0' ? 'action-btn zero' : 'action-btn clear'}>
            {props.text}
        </span>
    );
};

export default ActionButton;