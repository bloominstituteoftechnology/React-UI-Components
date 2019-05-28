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
        <NumberButton info="/"buttonStyle="redbutton"/>
        </div>
        <div className="row2">
        <NumberButton info="7"/>
        <NumberButton info="8"/>
        <NumberButton info="9"/>
        <NumberButton info="x"buttonStyle="redbutton"/>
        </div>
        <div className="row3">
        <NumberButton info="4"/>
        <NumberButton info="5"/>
        <NumberButton info="6"/>
        <NumberButton info="-"buttonStyle="redbutton"/>
        </div>
        <div className="row4">
        <NumberButton info="1"/>
        <NumberButton info="2"/>
        <NumberButton info="3"/>
        <NumberButton info="+"buttonStyle="redbutton"/>
        </div>
        <div className="row5">
        <ActionButton text="0"/> 
        <NumberButton info="="buttonStyle="redbutton"/>
        </div>
        </div>
    );
};

  export default CalcDisplay;