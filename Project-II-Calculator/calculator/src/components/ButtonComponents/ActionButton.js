import React from 'react';
import './Button.css';

//These are the following buttons: DIVISION MULTIPLY EQUAL PLUS MINUS and CLEAR

const ActionButton = (props) => {
    return(
        <React.Fragment>
            <a className={props.styles}>{props.type}</a>
        </React.Fragment>
    )
}

export default ActionButton;