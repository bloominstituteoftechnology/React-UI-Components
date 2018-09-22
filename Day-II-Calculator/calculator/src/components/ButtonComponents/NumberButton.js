import React from 'react';
import './Button.css';

//square button for num 1-9 and +,-,*,/
//returns single button that take a style and some data
//child element for action button
const NumberButton = (props) => {
    return(
        <button className={props.displayStyle}>
            {props.data}
        </button>
    )
};

NumberButton.defaultProps = {
    displayStyle: "white-square"
}

export default NumberButton;