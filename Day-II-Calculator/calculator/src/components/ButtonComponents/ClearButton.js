import React from 'react';
import './Button.css';

const ClearButton = (props) => {
    return <button className = "btn__clear btn--white" onClick = {props.clearHandler}>{props.name}</button>
}

ClearButton.defaultProps = {
    name: "clear"
};

export default ClearButton;