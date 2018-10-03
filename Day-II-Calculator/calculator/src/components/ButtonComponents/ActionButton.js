import React from 'react';
import './Button.css';

const ActionBtn = props => {
    return <button className='actionBtn'>{props.action}</button>;
}

export default ActionBtn;