import React from 'react';
import './Button.css';

function Action(props) {
    return <div className="action">
                {props.actiontype}
            </div>
}

export default Action;