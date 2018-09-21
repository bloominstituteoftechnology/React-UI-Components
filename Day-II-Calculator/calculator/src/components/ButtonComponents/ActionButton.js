import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <section>
            <button>{props.data}</button>
        </section>
    );
};

export default ActionButton;