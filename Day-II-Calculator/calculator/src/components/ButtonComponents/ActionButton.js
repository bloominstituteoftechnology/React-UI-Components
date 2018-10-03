import React from 'react';

const ActionButton = props => {

    return(
        <div className="action-btn-contaner">
            <button className={props.class}>{props.text}</button>
        </div>
    );
}

export default ActionButton;