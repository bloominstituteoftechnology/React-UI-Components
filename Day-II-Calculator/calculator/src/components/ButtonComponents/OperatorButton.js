import React from 'react';
import './Button.css';

function OperatorButton(props){
    return <div className='operator-button'>{props.op}</div>
};

export default OperatorButton;