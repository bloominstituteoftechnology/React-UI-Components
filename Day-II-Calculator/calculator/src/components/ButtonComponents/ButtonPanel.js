import React from "react";
import './Button.css';
import ActionButton from "./ActionButton.js";
import NumberButton from "./NumberButton.js";

const ButtonPanel  = props => {
    return (
    <div className="buttonPanelContainer">
    <NumberButton></NumberButton>
     <ActionButton></ActionButton>
     </div>
 );
 };

export default ButtonPanel;