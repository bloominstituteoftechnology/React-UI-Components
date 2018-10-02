import React from 'react';
import './Button.css';


const NumberButton = props => {

    return(
        <div className={`${props.data.color} ${props.data.size} ${props.data.bold} centerText`}>
            <p>{props.data.symbol}</p>
        </div>
    )
}

export default NumberButton;