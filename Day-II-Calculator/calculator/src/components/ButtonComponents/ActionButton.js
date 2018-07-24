import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div>
            <button className={'actbutton ${props.redbtn}'}>{props.text}</button>
        </div>
    );
};

export default ActionButton;
  