import React from 'react';
import './Button.css';


const ActionButton = props => {
    return <button className="action-button"> {props.name} </button>;

};

ActionButton.defaultProps = {
    name:"add name prop"
};

export default ActionButton;
