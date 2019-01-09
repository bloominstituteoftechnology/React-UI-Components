import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className='NumberButton'>
            <div>
                <p>{props.num}</p>
            </div>
        </div>
    );
}



export default NumberButton;