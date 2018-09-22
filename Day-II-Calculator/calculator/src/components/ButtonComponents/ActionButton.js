import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return(<div className="ab-main">
        <p>{props.name}</p>
    </div>);
};

export default ActionButton;