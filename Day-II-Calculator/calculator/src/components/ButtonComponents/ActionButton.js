import React from 'react';

const ActionButton = props => {
    return (
        <>
            <button className="action-button" value={props.text}>
                {props.text}
            </button>
        </>
    );
};

export default ActionButton;
