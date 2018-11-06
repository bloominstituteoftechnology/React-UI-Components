import React from 'react';
import './Button.css';
import ClearButton from './ClearButton';

function NumberButton(){
    return(
        <div className="calculator__buttons--number">
            <ClearButton />
            <div className="calculator__button--number">1</div>
            <div className="calculator__button--number">2</div>
            <div className="calculator__button--number">3</div>
            <div className="calculator__button--number">4</div>
            <div className="calculator__button--number">5</div>
            <div className="calculator__button--number">6</div>
            <div className="calculator__button--number">7</div>
            <div className="calculator__button--number">8</div>
            <div className="calculator__button--number">9</div>
            <div className="calculator__button--number">0</div>
        </div>
    );
}

export default NumberButton;

