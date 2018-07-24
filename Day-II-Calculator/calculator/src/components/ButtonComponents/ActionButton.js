import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button onClick={ props.onClick }className={ `${ props.style }` }>
            {props.action}
        </button>
    );
};

ActionButton.defaultProps = {action: '&'};

export default ActionButton;