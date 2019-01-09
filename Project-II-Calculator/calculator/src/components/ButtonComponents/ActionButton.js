import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <button className='props.symbol'>
            {props.symbol}
        </button>
    )
};

export default ActionButton;
