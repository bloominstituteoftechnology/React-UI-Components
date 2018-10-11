import React from 'react';
import './Button.css';

const NumberButton = props => {
    const clickHandler = () => {
        alert(props.name);
    };

    return (
        <div 
        onClick={clickHandler}
        className={`number-button ${props.customStyleProp}`}>
            {props.name}            
        </div>
    );
};

//DEFAULT PROPS
NumberButton.defaultProps = {
    name: '#',
    customStyleProp: 'number-button'
};

export default NumberButton;
