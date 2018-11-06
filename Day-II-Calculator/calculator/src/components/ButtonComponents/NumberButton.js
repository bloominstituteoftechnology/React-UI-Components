import React, { Fragment } from 'react';
import './Button.css';

function NumberButton(props) {
    return(
        <Fragment>
            <button className={props.buttonStyle}>{props.text}</button>
        </Fragment>
    );
}

export default NumberButton;