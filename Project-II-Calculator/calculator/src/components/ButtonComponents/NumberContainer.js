import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton.js";
import NumberButton from "./NumberButton.js"

function NumberContainer(props) {
    return (
        <div>
            <ActionButton symbol="clear"/>
            <div className="numbers">
                <div className="one-nine">
                    <NumberButton symbol="1"/>
                    <NumberButton symbol="2"/>
                    <NumberButton symbol="3"/>
                    <NumberButton symbol="4"/>
                    <NumberButton symbol="5"/>
                    <NumberButton symbol="6"/>
                    <NumberButton symbol="7"/>
                    <NumberButton symbol="8"/>
                    <NumberButton symbol="9"/>
                </div>
            <ActionButton symbol="0"/>
            </div>
        </div>
    )
}

export default NumberContainer;