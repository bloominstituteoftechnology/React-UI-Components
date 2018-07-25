import React from 'react';
import './Button.css';

const ButtonCreator = props => 

function ActionButton (props){
    return (
        <button className={`action-btn ${props.extraStyles}`}>{props.text}</button>
    )
}

ActionButton.defaultProps = {
    text: 'N/A'
}

export default ActionButton