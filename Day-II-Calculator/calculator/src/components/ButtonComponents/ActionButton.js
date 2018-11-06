import React, { Fragment } from 'react';
import './Button.css';

function ActionButton(props) {
    return(
        <Fragment>
            <button className="action-button">{props.text}</button>
        </Fragment>
    );
}

export default ActionButton;