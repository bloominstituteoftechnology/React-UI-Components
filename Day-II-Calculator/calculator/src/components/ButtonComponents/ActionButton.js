import React from 'react';
import './ActionButton.css'

const ActionButton = (props) => {
    return(<div className="btn-act">
        <p>{props.name}</p>
    </div>);
};

export default ActionButton;