import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    return (<div className="Action-Button">
                <h1>{props.type}</h1>
            </div>)
}

export default ActionButton