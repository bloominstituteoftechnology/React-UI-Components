import React from 'react';

const ActionButton = props => {
    return (
        <>
            <button className="action-button">{props.text}</button>
        </>
    );
};

export default ActionButton;
