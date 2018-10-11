import React from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';


const ButtonContainer = () => {
    return (
        <div className="button-container">
            <div className="calc-nums-container">
                <ActionButton name="clear" />
                <div className="calc-nums">
                                        
                    <NumberButton name="9" />
                    <NumberButton name="8" />
                    <NumberButton name="7" />
                    <NumberButton name="6" />
                    <NumberButton name="5" />
                    <NumberButton name="4" />
                    <NumberButton name="3" />
                    <NumberButton name="2" />
                    <NumberButton name="1" />

                </div>
                <ActionButton name="0" />
            </div>
            <div className="calc-ops">
          <NumberButton name="÷" />
                <NumberButton name="x" />
                <NumberButton name="-" />
                <NumberButton name="+" />
                <NumberButton name="=" />
            </div>    
        </div>
    )
};

export default ButtonContainer;

