import React from 'react';
import './Button.css';

const ActionButton = props => {

    return (
        <button className="btn three-quarter-button">{props.name}</button>
    )

}

ActionButton.defaultProps = {
    name: "default"
}

export default ActionButton;