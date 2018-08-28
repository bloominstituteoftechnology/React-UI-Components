import React from 'react';
import './Button.css';

const NumberButton = () =>(
    <div className="number-button">
        <Box text="clear" type="action"/>
        <Box text="÷" type="operation"/>
        <Box text="7" type="number"/>
        <Box text="8" type="number"/>
        <Box text="9" type="number"/>
        <Box text="x" type="operation"/>
        <Box text="4" type="number"/>
        <Box text="5" type="number"/>
        <Box text="6" type="number"/>
        <Box text="-" type="operation"/>
        <Box text="1" type="number"/>
        <Box text="2" type="number"/>
        <Box text="3" type="number"/>
        <Box text="+" type="operation"/>
        <Box text="0" type="action"/>
        <Box text="=" type="operation"/>
    </div>
);

function Box(props) {
    return(
        <button className={`box ${props.type}`}>{props.text}</button>
    );
}

export default NumberButton;
