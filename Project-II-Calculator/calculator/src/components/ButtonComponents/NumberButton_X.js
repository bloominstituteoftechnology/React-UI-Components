import React from 'react';
import './Button.css';


const NumberButton = () => (
    <div className="numBtns">

        <button className="bigBtn">clear</button>

        <div className="smallButtons">
            <button className="smallbtn">7</button>
            <button className="smallbtn">8</button>
            <button className="smallbtn">9</button>
            <button className="smallbtn">4</button>
            <button className="smallbtn">5</button>
            <button className="smallbtn">6</button>
            <button className="smallbtn">1</button>
            <button className="smallbtn">2</button>
            <button className="smallbtn">3</button>
        </div>

        <button className="bigBtn zero">0</button>

        
    </div>
);

export default NumberButton;


