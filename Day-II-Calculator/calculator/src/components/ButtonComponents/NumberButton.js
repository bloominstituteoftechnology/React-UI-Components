import React from 'react';
import './Button.css';
import BigButton from './BigButton'

const Button = props => {
    console.log ('PROPS', props.name);
    return <button className="calc-button">{props.name}</button>
};

Button.defaultProps={
    name:'Default Button'
}

const NumberButton= props => {
    return (
        <div className="number-button">
            {/*<Button name="clear" />*/}
            <BigButton name="clear" />
            <Button name="7" />
            <Button name="8" />
            <Button name="9" />
            <Button name="4" />
            <Button name="5" />
            <Button name="6" />
            <Button name="1" />
            <Button name="2" />
            <Button name="3" />
            <BigButton name="0" />
        </div>
    );
};

export default NumberButton;