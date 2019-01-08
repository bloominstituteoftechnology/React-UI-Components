import React from 'react';
import './Button.css';

function NumberButton(props) {
    console.log(props)
    return (
        <div className='NumberButton'>
            <p>{props.num}</p>
        </div>
    );
}



export default NumberButton;