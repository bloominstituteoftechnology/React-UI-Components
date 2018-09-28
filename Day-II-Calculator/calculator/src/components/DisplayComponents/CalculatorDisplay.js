import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    return (
        <div className="calculator">
            <div className="calculator_screen"><h1 className="calculator-screen_input">0</h1></div>
            
            <div className="calculator_buttons">
                <div className="button-rows">
                        <div className="button-row special">
                        <h2>clear</h2>
                        </div>

                        <div className="button-row">
                        <NumberButton style="numButton" text="7"/>
                        <NumberButton style="numButton" text="8"/>
                        <NumberButton style="numButton" text="9"/>
                        </div>

                        <div className="button-row">
                        <NumberButton style="numButton" text="4"/>
                        <NumberButton style="numButton" text="5"/>
                        <NumberButton style="numButton" text="6"/>
                        </div>

                        <div className="button-row">
                        <NumberButton style="numButton" text="1"/>
                        <NumberButton style="numButton" text="2"/>
                        <NumberButton style="numButton" text="3"/>
                        </div>  

                        <div className="button-row special">
                        <h2>0</h2>
                        </div>
                </div>
                
                <div className="actionbuttoncolumn">
                    <ActionButton style="actButton" text="÷" />
                    <ActionButton style="actButton" text="×" />
                    <ActionButton style="actButton" text="-" />
                    <ActionButton style="actButton" text="+" />
                    <ActionButton style="actButton" text="=" />
                </div>
            </div>
        </div>
    );
};

export default CalculatorDisplay;
