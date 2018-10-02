import React from 'react';
import './Button.css';


function Button(props) {
    const {button} = props;
    return (
        <div>
            <p className = 'numberButton'>{button.one}</p>
            <p className = 'numberButton'>{button.two}</p>
            <p className = 'numberButton'>{button.three}</p>
            <p className = 'numberButton'>{button.four}</p>
            <p className = 'numberButton'>{button.five}</p>
            <p className = 'numberButton'>{button.six}</p>
            <p className = 'numberButton'>{button.seven}</p>
            <p className = 'numberButton'>{button.eight}</p>
            <p className = 'numberButton'>{button.nine}</p>
            <p className = 'functionButton'>{button.divide}</p>
            <p className = 'functionButton'>{button.multiply}</p>
            <p className = 'functionButton'>{button.subtract}</p>
            <p className = 'functionButton'>{button.add}</p>
            <p className = 'functionButton'>{button.equal}</p>
        </div>
    )
}


export default Button;