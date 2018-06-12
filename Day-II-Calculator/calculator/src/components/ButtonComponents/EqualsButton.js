import React from 'react';
import './Button.css';

const EqualsButton = (props) => {
    return <button className = {props.class}>{props.symbol}</button>
}

EqualsButton.defaultProps = {
    symbol: "=",
    class: "btn--red"
};

export default EqualsButton;