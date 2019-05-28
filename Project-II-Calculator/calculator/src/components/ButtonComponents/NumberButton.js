import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="numberContainer">
            <div className="numberbutton">
                <button className={`basicButtonStyle ${props.buttonStyle}`}>{props.info}</button>
            </div>
        </div>
    );
};

NumberButton.defaultProps = {
    buttonStyle: 'white',
};

export default NumberButton;