import React from 'react';
import Button from './Button';
import './NumberButtons.css';

const NumberButton = props => {
    return (
        <div className="numberButtons">
            <Button text="clear" cName="numButton fullLength" />
            <Button text="7" cName="numButton" />
            <Button text="8" cName="numButton" />
            <Button text="9" cName="numButton" />
            <Button text="4" cName="numButton" />
            <Button text="5" cName="numButton" />
            <Button text="6" cName='numButton'/>
            <Button text="1" cName='numButton'/>
            <Button text="2" cName='numButton'/>
            <Button text="3" cName='numButton'/>
            <Button text="0" cName='numButton fullLength'/>
        </div>
    );
}


export default NumberButton;