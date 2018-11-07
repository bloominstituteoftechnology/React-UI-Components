import React, { Fragment } from 'react';
import './Button.css';

function OperatorButton(props) {
    return (
        <Fragment>
          <button className={props.button.buttonStyle} id={props.id} onClick={props.onClick}>{props.button.text}</button>
        </Fragment>
    );
}

export default OperatorButton;