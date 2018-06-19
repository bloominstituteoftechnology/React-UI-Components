import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.buttonStyle}>{props.buttonFunction}</button>
    );
};
ActionButton.defaultProps = {
    buttonFunction: 'Default text'
}
 
export default ActionButton;
