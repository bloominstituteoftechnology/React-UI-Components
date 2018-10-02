import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

const ButtonContainer = () => {
    // const clearStyle = "button action xStart1 yStart1"

    return (
        <div className="allButtons">
            <ActionButton text="clear" buttonStyle="button action not-bold" />
            <NumberButton text="&divide;" buttonStyle="button operation" />
            <NumberButton text="7" buttonStyle="button" />
            <NumberButton text="8" buttonStyle="button" />
            <NumberButton text="9" buttonStyle="button" />
            <NumberButton text="&times;" buttonStyle="button operation" />
            <NumberButton text="4" buttonStyle="button" />
            <NumberButton text="5" buttonStyle="button" />
            <NumberButton text="6" buttonStyle="button" />
            <NumberButton text="&minus;" buttonStyle="button operation" />
            <NumberButton text="1" buttonStyle="button" />
            <NumberButton text="2" buttonStyle="button" />
            <NumberButton text="3" buttonStyle="button" />
            <NumberButton text="+" buttonStyle="button operation" />
            <ActionButton text="0" buttonStyle="button action" />
            <NumberButton text="=" buttonStyle="button operation" />
        </div>
    );
}

export default ButtonContainer;