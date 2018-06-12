import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={props.customStyleProp}>{props.name}</button>;
};

export default ActionButton;