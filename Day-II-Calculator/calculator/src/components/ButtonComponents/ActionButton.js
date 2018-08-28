import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div class="actBut">
            <button class="actions">{props.buttonText}</button>
        </div>
    )
}



export default ActionButton;
