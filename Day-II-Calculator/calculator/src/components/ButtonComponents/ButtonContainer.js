import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';


function ButtonContainer() {
    const numArray = [9,8,7,6,5,4,3,2,1]

    return (
        <div className="calculator-buttons-area">
            <div className="numbers-clear-buttons-area">

                <ActionButton buttonStyle="clear" text="clear" />

                <div className="number-buttons-area">
                    {numArray.map(item => {
                        return <NumberButton buttonStyle="number-button" text={item} />;
                    })}
                </div>

                <ActionButton buttonStyle="zero" text="0" />
            </div>

            <div className="operator-buttons">
                <NumberButton buttonStyle="operator-button" text="÷" />
                <NumberButton buttonStyle="operator-button" text="×" />
                <NumberButton buttonStyle="operator-button" text="-" />
                <NumberButton buttonStyle="operator-button" text="+" />
                <NumberButton buttonStyle="operator-button" text="=" />
            </div>
        </div>
    )
}

export default ButtonContainer;