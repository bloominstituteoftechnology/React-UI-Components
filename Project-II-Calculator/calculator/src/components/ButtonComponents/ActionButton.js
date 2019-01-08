import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div className="ActionButton">
            <div>
                <p className="Acts">{props.action}</p>
            </div>

        </div>
    )
}

export default ActionButton;