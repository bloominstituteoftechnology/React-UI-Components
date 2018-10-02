import React from 'react';
import Button from './Button';
import './Button.css';

const NumberButton = props => {
    return <div class="numberButtons">
        <div class="row">
            <Button text="clear" />
        </div>
        <div class="row">
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
        </div>
        <div class="row">
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
        </div>
        <div class="row">
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
        </div>
        <div class="row">
            <Button text="0" />
        </div>
      </div>; 
}


export default NumberButton;