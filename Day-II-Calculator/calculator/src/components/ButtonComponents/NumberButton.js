import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (<div className="Number-Button">
                <h1>{props.num}</h1>
            </div>)
}

const Number0 = () => {
    return (
        <div className="Full-Display-Button">
            <h1>0</h1>
        </div>
    )
}

export default NumberButton