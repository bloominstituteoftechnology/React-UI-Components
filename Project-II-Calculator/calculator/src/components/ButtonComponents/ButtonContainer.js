import React from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';
import MathButton from './MathButton'



const ButtonContainer = () => (

    <div className="allBtns">
    
        <div className="numBtns">

            <ActionButton buttonStyle="bigBtn" text="clear"/>

            <div className="smallButtons">
                <NumberButton buttonStyle="smallbtn" text="7"/>
                <NumberButton buttonStyle="smallbtn" text="8"/>
                <NumberButton buttonStyle="smallbtn" text="9"/>
                <NumberButton buttonStyle="smallbtn" text="4"/>
                <NumberButton buttonStyle="smallbtn" text="5"/>
                <NumberButton buttonStyle="smallbtn" text="6"/>
                <NumberButton buttonStyle="smallbtn" text="1"/>
                <NumberButton buttonStyle="smallbtn" text="2"/>
                <NumberButton buttonStyle="smallbtn" text="3"/>
            </div>

            <ActionButton buttonStyle="bigBtn zero" text="0"/>

        </div>

        <MathButton />

    </div>
);





export default ButtonContainer;
