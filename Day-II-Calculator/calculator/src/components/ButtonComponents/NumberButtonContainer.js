import React from 'react';
import './Button.css';
import NumberButtons from './NumberButton';
const NumberButtonsContainer= (props) => {
    return (
        <div className="numberContainer">
            <NumberButtons text="clear" displayStyle='clearZero' />
            <NumberButtons text="7" displayStyle='numbers' />
            <NumberButtons text="8" displayStyle='numbers' />
            <NumberButtons text="9" displayStyle='numbers' />
            <NumberButtons text="4" displayStyle='numbers' />
            <NumberButtons text="5" displayStyle='numbers' />
            <NumberButtons text="6" displayStyle='numbers' />
            <NumberButtons text="1" displayStyle='numbers' />
            <NumberButtons text="2" displayStyle='numbers' />
            <NumberButtons text="3" displayStyle='numbers' />
            <NumberButtons text="0" displayStyle='clearZero zero'  />
        </div>
    )
}
export default NumberButtonsContainer