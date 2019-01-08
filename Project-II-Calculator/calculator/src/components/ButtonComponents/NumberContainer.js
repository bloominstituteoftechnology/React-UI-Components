import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton.js";
import NumberButton from "./NumberButton.js"

function NumberContainer(props) {
    return (
        <div>
            <ActionButton text="clear"/>
            <div className="numbers">
                <div className="one-nine">
                    <NumberButton text="1"/>
                    <NumberButton text="2"/>
                    <NumberButton text="3"/>
                    <NumberButton text="4"/>
                    <NumberButton text="5"/>
                    <NumberButton text="6"/>
                    <NumberButton text="7"/>
                    <NumberButton text="8"/>
                    <NumberButton text="9"/>
                </div>
            <ActionButton text="0"/>
            </div>
        </div>
    )
}

export default NumberContainer;