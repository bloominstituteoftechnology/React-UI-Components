import React, {Fragment} from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

function ButtonContainer(props) {
    
    function callback(value) {
        props.onValueReceived(value);
    }
    
    return (
        <Fragment>
            <div className="row">
                <ActionButton value="clear" buttonWidth="wide clear" whenClicked={(value) => callback(value)} />
                <ActionButton value="÷" buttonColor="red" whenClicked={(value) => callback(value)} />
            </div>
            <div className="row">
                <NumberButton value="7" whenClicked={(value) => callback(value)} />
                <NumberButton value="8" whenClicked={(value) => callback(value)} />
                <NumberButton value="9" whenClicked={(value) => callback(value)} />
                <ActionButton value="x" buttonColor="red" whenClicked={(value) => callback(value)} />
            </div>
            <div className="row">
                <NumberButton value="4" whenClicked={(value) => callback(value)} />
                <NumberButton value="5" whenClicked={(value) => callback(value)} />
                <NumberButton value="6" whenClicked={(value) => callback(value)} />
                <ActionButton value="-" buttonColor="red" whenClicked={(value) => callback(value)} />
            </div>
            <div className="row">
                <NumberButton value="1" whenClicked={(value) => callback(value)} />
                <NumberButton value="2" whenClicked={(value) => callback(value)} />
                <NumberButton value="3" whenClicked={(value) => callback(value)} />
                <ActionButton value="+" buttonColor="red" whenClicked={(value) => callback(value)} />
            </div>
            <div className="row">
                <NumberButton value="0" buttonWidth="wide" whenClicked={(value) => callback(value)} />
                <ActionButton value="=" buttonColor="red" whenClicked={(value) => callback(value)} />
            </div>
        </Fragment>
        
    );

}

export default ButtonContainer;