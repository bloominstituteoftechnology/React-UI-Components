import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return(
        <button className={props.displayStyle}>
            {props.text}
        </button>
    )
};
 NumberButton.defaultProps = {
    displayStyle: "white-square"
}
 export default NumberButton;