import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton.js"


function OperatorContainer(props) {
    return (
        <div className="red">
            <NumberButton symbol="÷"/>
            <NumberButton symbol="x"/>
            <NumberButton symbol="-"/>
            <NumberButton symbol="+"/>
            <NumberButton symbol="="/>
        </div>
    )
}

export default OperatorContainer;