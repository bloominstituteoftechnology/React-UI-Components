import React from 'react';
import './Button.css';

const ActionButton = (props) =>{
    if(props.action==='clear'){
        return(
            <div class='action button clear'>{props.action}</div>
        );
    }
    return(
        <div class='action button'>{props.action}</div>
    );
};

export default ActionButton;