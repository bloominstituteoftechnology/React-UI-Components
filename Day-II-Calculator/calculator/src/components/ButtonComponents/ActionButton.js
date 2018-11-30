import React from 'react';
import './Button.css';

const ActionButton = props => <button className="clear">{props.name}</button>

ActionButton.defaultProps = {
    name: 'Yo, put something here!'
}

export default ActionButton;