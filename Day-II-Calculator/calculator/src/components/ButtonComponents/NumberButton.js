import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <section className='btn-container'>
            <button className={props.displayStyle}>{props.data}</button>
        </section>
    );
};

export default NumberButton;