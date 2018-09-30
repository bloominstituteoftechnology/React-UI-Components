import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return ( <div className="Calculator-Display">
                <h1>{props.num}</h1>
            </div>);
};
export default CalculatorDisplay