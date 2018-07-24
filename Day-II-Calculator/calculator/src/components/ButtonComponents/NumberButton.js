import React from 'react';
import './Button.css';

const NumberButtonCreator = (props)=> {
    return (
        <div className={`button num-btn ${props.extraStyles}`}>{props.button}</div>
    );
};

NumberButtonCreator.defaultProps = {
    button: 0
};

const NumberButton = ()=> {
    return (
        <div> 
            <NumberButtonCreator button="clear" extraStyles="three-fourths" />
            <NumberButtonCreator button={1} />
            <NumberButtonCreator button={2} />
            <NumberButtonCreator button={3} />
            <NumberButtonCreator button={4} />
            <NumberButtonCreator button={5} />
            <NumberButtonCreator button={6} />
            <NumberButtonCreator button={7} />
            <NumberButtonCreator button={8} />
            <NumberButtonCreator button={9} />
            <NumberButtonCreator button={0} extraStyles="three-fourths"/>
        </div>
    );
};

export default NumberButton;
