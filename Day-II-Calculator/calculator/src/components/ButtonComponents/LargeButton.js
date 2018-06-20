import React from "react";
import "./Button.css";


const LargeButton = props => {
    return <button className="large-button"> {props.name} </button>;
};

LargeButton.defaultProps = {
    name:"add name prop"
};

export default LargeButton;

