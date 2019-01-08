import React from 'react';
import './Button.css';

export const ActionButton = props => {
    return (<div class="actionbutton av{props.actionvalue}">
        {props.actionvalue}
    </div>
    );
};
