import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <section>
            <button className={props.displayStyle}>{props.data}</button>
        </section>
    );
};

export default ActionButton;