import React from 'react';
import './Button.css';


const NumberButtons = (props) => {
    return (
        <div className='NumberContainer'>
            <p>{props.text}</p>
        </div>
    );
};


export default NumberButtons; 