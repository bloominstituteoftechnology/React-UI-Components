import React from 'react';
import './Button.css';


const NumberButton = () => {
    return (
        <div className="">
          
          <div className="calc-clear-btn calc-clear-text">clear</div>
          <div className="numbers">
            <div className="top-numbers">
                <div className="button-border-top">7</div>
                <div className="button-border-top">8</div>
                <div className="button-border-top">9</div>
            </div>
            <div className="top-numbers">
                <div className="button-border-mid">4</div>
                <div className="button-border-mid">5</div>
                <div className="button-border-mid">6</div>
            </div>
            <div className="top-numbers">
                <div className="button-border-lower">1</div>
                <div className="button-border-lower">2</div>
                <div className="button-border-lower">3</div>
            </div> 
          </div>
          <div className="bottom-number-zero">0</div>
        </div>
    );
}; 

export default NumberButton;