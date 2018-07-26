import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <button className={`bigButton ${props.buttonStyle}`}>
            {props.text}
        </button>
    );
}

ActionButton.defaultProps = {
    buttonStyle: 'align'
};

export default ActionButton;