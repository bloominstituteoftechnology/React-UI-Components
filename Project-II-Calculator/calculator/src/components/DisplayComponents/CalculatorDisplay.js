import React from 'react';
import './Display.css';


import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


 const CalcDisplay = props => {
    return (
        <div className="calcDisplay">
        <div className="answer">0</div>
        <div className="row1">
        <ActionButton text="clear"/> 
        <NumberButton text="/"buttonStyle="redbutton"/>
        </div>
        <div className="row2">
        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <NumberButton text="x"buttonStyle="redbutton"/>
        </div>
        <div className="row3">
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <NumberButton text="-"buttonStyle="redbutton"/>
        </div>
        <div className="row4">
        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <NumberButton text="+"buttonStyle="redbutton"/>
        </div>
        <div className="row5">
        <ActionButton text="0"/> 
        <NumberButton text="="buttonStyle="redbutton"/>
        </div>
        </div>
    );
};

 export default CalcDisplay; 