import React from 'react';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

function ButtonContainer(props) {
    
    function callback(value) {
        props.onValueReceived(value);
    }
    
    return (
        <div className="row">
            <ActionButton value="clear" whenClicked={(value) => callback(value)} />
            <ActionButton value="÷" whenClicked={(value) => callback(value)} />
        </div>
        <div className="row">
            <NumberButton value="7" whenClicked={(value) => callback(value)} />
            <NumberButton value="8" whenClicked={(value) => callback(value)} />
            <NumberButton value="9" whenClicked={(value) => callback(value)} />
        </div>
    );

}

export default ButtonContainer;