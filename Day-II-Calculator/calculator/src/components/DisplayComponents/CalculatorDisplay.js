import React from 'react';
import './Display.css';
import ActionButton from "../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";

const Display = props => {
    return (
        <div className="container">
            <div className="display">0</div>
            <ActionButton buttonStyle={"action"} text={"clear"} />
            <NumberButton buttonStyle={"operator"} text={"÷"} />
            <NumberButton buttonStyle={"number"} text={"7"} />
            <NumberButton buttonStyle={"number"} text={"8"} />
            <NumberButton buttonStyle={"number"} text={"9"} />
            <NumberButton buttonStyle={"operator"} text={"×"} />
            <NumberButton buttonStyle={"number"} text={"4"} />
            <NumberButton buttonStyle={"number"} text={"5"} />
            <NumberButton buttonStyle={"number"} text={"6"} />
            <NumberButton buttonStyle={"operator"} text={"-"} />
            <NumberButton buttonStyle={"number"} text={"1"} />
            <NumberButton buttonStyle={"number"} text={"2"} />
            <NumberButton buttonStyle={"number"} text={"3"} />
            <NumberButton buttonStyle={"operator"} text={"+"} />
            <ActionButton buttonStyle={"action"} text={"0"} />
            <NumberButton buttonStyle={"operator"} text={"="} />
        </div>
    );
}

export default Display;