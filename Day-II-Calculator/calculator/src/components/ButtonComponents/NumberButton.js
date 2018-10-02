import React from 'react';
import './Button.css';

const BasicButton = props => <button className={props.buttonStyle}>{props.text}</button>

const NumberButton = props => {
    return (
        <div>
            <div className="left-side">
                <BasicButton buttonStyle="clearButton" text="clear" />
                <div className="small-numbers">
                    <BasicButton buttonStyle="basicButton" text="1" />
                    <BasicButton buttonStyle="basicButton" text="2" />
                    <BasicButton buttonStyle="basicButton" text="3" />
                    <BasicButton buttonStyle="basicButton" text="4" />
                    <BasicButton buttonStyle="basicButton" text="5" />
                    <BasicButton buttonStyle="basicButton" text="6" />
                    <BasicButton buttonStyle="basicButton" text="7" />
                    <BasicButton buttonStyle="basicButton" text="8" />
                    <BasicButton buttonStyle="basicButton" text="9" />
                </div>
                <BasicButton buttonStyle="zeroButton" text="0" />
            </div>
        </div>
    )
}

export default NumberButton;