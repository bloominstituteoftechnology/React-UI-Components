import React from 'react';
import './Button.css';

const ActionButton = (props) => { return <p className={`${props.style}`}>{props.text}</p>};

ActionButton.defaultProps = {
    'style': 'default-act-bttn-style',
}

export default ActionButton;