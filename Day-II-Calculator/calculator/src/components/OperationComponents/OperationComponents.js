import React from 'react';
import './Operation.css';

function OperationButton(props){
    return(
        <div className={props.style}>
            {props.text}
        </div>
    );
}

export default OperationButton;