import React from 'react';
import './Button.css'

const ActionButtonLarge = (props) => {
    return (<div className="btn-large">
        <p>{props.name}</p>
    </div>
    );
};

export default ActionButtonLarge;