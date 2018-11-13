import React from 'react';
import './Button.css';

const NumberButton = () => {

    return (
        <div className ="Calculator">
        <div className ="secondrow">
        <div className="clearkey">clear</div>
        <div className="divkey"></div>
        </div>
        <div className="thirdrow">
            <div className="numberkey">7</div>
            <div className="numberkey">8</div>
            <div className="numberkey">9</div>
            <div className="multkey">X</div>
        </div>
        <div className="fourthrow">
            <div className="numberkey">4</div>
            <div className="numberkey">5</div>
            <div className="numberkey">6</div>
            <div className="minuskey">-</div>
        </div>
        <div className="fifthrow">
            <div className="numberkey">1</div>
            <div className="numberkey">2</div>
            <div className="numberkey">3</div>
            <div className="pluskey">+</div>
        </div >
        <div className ="sixthrow">
            <div className="zerokey">0</div>
            <div className="equalkey">=</div>
        </div>
        </div>
        )
}


export default NumberButton;