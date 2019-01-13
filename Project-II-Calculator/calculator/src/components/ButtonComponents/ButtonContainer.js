import React from 'react';
import './Button.css';
import BigButton from './BigButton';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import Decimal from './Decimal';

const bigButtons = ['clear', 0];
const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const actionButtons = ['\u00F7', '\u00D7', '\u2212', '\u002B', '\u003D'];

const ButtonContainer = props => {
    return (
        <div className="button-container">
            <div className="numbers">
                <BigButton content={bigButtons[0]} clearDisplay={props.clearDisplay} />
                {numberButtons.map(number => ( 
                    <NumberButton 
                        key={number.toString()} 
                        number={number} 
                        handleInput={props.handleInput}
                    /> 
                ))}
                <BigButton content={bigButtons[1]} handleInput={props.handleInput} />
                <Decimal content='.' handleInput={props.handleInput}/>
            </div>
            <div className="actions">
                {actionButtons.map(item => 
                    ( <ActionButton 
                        key={item.toString()} 
                        content={item} 
                        handleOperand={props.handleOperand}
                      /> )
                )}
            </div>
        </div>
    );
};


export default ButtonContainer;