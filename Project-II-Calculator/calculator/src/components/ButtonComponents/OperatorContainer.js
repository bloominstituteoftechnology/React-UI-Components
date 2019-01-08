import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton.js"


function OperatorContainer(props) {
    return (
        <div className={props.buttonStyle}>
            <NumberButton text="÷"/>
            <NumberButton text="x"/>
            <NumberButton text="-"/>
            <NumberButton text="+"/>
            <NumberButton text="="/>
        </div>
    )
}

export default OperatorContainer;