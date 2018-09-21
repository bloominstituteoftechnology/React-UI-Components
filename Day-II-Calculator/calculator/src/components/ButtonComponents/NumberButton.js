import React from 'react';
import './Button.css';


const NumberButton = () => {

    return (
        <div className="numberPad">
            <div className="numberButton" id="clear" data-value="clear">clear</div>
            <div className="numberButton" data-value="7">7</div>
            <div className="numberButton" data-value="8">8</div>
            <div className="numberButton" data-value="9">9</div>
            <div className="numberButton" data-value="4">4</div>
            <div className="numberButton" data-value="5">5</div>
            <div className="numberButton" data-value="6">6</div>
            <div className="numberButton" data-value="1">1</div>
            <div className="numberButton" data-value="2">2</div>
            <div className="numberButton" data-value="3">3</div>
            <div className="numberButton" id="zero" data-value="0">0</div>
        </div>
    );
}


export default NumberButton;