import React from 'react';
import './Button.css';
// import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

// {/*const ActionButtonsArray = ['÷', 'x', '-', '+', '='];*/}
// {/*const NumberButtonsArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear'];*/}

const row2Array = ["7", "8", "9", "x"];
const row3Array = ["4", '5', '6', '-'];
const row4Array = ['1', '2', '3', '+'];

const ButtonBody = () => {
    return (
        <div className="button-body">
            <div className="row1">
                <div className="clear-button wide-button">
                    <p>clear</p>
                </div>
                <div className="one-piece">
                    <p>÷</p>
                </div>

            </div>
            <div className="row2">
                {row2Array.map(button => <NumberButton button={button} />)}
            </div>
            <div className="row3">
                {row3Array.map(button => <NumberButton button={button} />)}
            </div>
            <div className="row4">
                {row4Array.map(button => <NumberButton button={button} />)}
            </div>
            <div className="row5">
                <div className="0-button wide-button">
                    <p>0</p>
                </div>
                <div className="one-piece">
                    <p>=</p>
                </div>
            </div>




            {/*(<div className="number-buttons">
            {NumberButtonsArray.map(button => <NumberButton button={button} />)}
            </div>
            <div className="action-buttons">
            {ActionButtonsArray.map(button => <ActionButton button={button} />)}
    </div>*/}
        </div>
    )
}

export default ButtonBody;