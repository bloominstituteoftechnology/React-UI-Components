import React from 'react';
import './Button.css';
import './../DisplayComponents/CalculatorDisplay';
const InsertButton = (props) => {
    return <button className = {props.class} onClick = {() => props.symbolHandler(props.symbol)}>{props.symbol}</button>
}
InsertButton.defaultProps = {
    class: 'btn--white',
    symbol: '0'
};

export default InsertButton;