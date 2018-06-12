import React from 'react';
import './Button.css';

const ClearButton = (props) => {
    return <button className = "btn__clear btn--white">{props.name}</button>
}

ClearButton.defaultProps = {
    name: "clear"
};

export default ClearButton;