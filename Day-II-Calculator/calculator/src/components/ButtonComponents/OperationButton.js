import React from 'react';
import './Button.css';

const OperationButton = props => (
    <div onClick={() => props.click(props.text)} className='op-btn'>{props.text}</div>
);

export default OperationButton;