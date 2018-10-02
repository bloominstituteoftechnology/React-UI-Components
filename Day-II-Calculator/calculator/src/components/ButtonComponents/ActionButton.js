import React from 'react';
import Button from './Button';
import './ActionButton.css';

const ActionButton = props => {
    return (
        <div class='actionButtons'>
            <Button text="&#247;" cName='actButton' />
            <Button text="&#215;" cName='actButton' />
            <Button text="&#8722;" cName='actButton' />
            <Button text="&#43;" cName='actButton' />
            <Button text="&#61;" cName='actButton' />
        </div>
    ) 
}

export default ActionButton;
