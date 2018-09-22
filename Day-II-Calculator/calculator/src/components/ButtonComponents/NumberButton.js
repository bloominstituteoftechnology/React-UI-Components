import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <section>
            <button className={props.displayStyle}>{props.data}</button>
        </section>
    );
};

export default NumberButton;