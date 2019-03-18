import React from 'react';
import './Button.css';


const NumberButtons = props => {
    return (
        <div>
            <div className="button-position">
                {/* <div className="action-clear-button">{props.text}</div> */}
                <div>
                    <div className={props.buttonStyles}>{props.text}</div>
                </div>
                <div className="number-container-flex">
                    <div className="number-container">7</div>
                    <div className="number-container">8</div>
                    <div className="number-container">9</div>
                </div>
                <div className="number-container-flex">
                    <div className="number-container">4</div>
                    <div className="number-container">5</div>
                    <div className="number-container">6</div>
                </div>
                <div className="number-container-flex">
                    <div className="number-container">1</div>
                    <div className="number-container">2</div>
                    <div className="number-container">3</div>
                </div>
                <div className="action-clear-button number-container-zero">0</div>
            </div>
        </div>
    );
};

NumberButtons.defaultProps = {
    buttonStyles: 'orange',
};

export default NumberButtons; 