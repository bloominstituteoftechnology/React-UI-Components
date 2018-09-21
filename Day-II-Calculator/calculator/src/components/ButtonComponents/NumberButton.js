import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    // props.type: css to display white/number or red/symbol.
    //             digit (default) or symbol
    // props.label: 1-9 or +-=x/
    return (
        <div className={props.type}>{props.label}</div>
    );
};
NumberButton.defaultProps = { type: "digit" };
export default NumberButton;