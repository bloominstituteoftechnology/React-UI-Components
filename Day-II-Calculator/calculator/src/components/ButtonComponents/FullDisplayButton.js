import React from 'react';
import './Button.css';

const FullDisplayButton= (props) => {
    return (
        <div className="Full-Display-Button">
            <p>{props.text}</p>
        </div>
    )
}

export default FullDisplayButton