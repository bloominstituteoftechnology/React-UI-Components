import React from 'react';

const ActionButton = props => {

    return(
        <button className={props.class}>{props.text}</button>
    );
}

export default ActionButton;