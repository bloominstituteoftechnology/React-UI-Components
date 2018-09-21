import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <section>
            <button>{props.data}</button>
        </section>
    );
};

export default NumberButton;