import React  from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const buttons = [
    {digit: 7},
    {digit: 8}, 
    {digit: 9}, 
    {digit: 4}, 
    {digit: 5}, 
    {digit: 6}, 
    {digit: 1},
    {digit: 2},
    {digit: 3}, 
]


function ButtonsContainer(){
    const buttonsDiplay = buttons.map(button => <NumberButton text={button.digit} buttonStyle="button"/>);

    return (
        <div className="buttons-container">
            <ActionButton classNames="border-top action-button" text="clear"/>
            <div className="buttons-wrapper">
              {buttonsDiplay}
            </div>
            <ActionButton classNames="border-bottom action-button" text="0"/>
        </div>
    );
}

export default ButtonsContainer;