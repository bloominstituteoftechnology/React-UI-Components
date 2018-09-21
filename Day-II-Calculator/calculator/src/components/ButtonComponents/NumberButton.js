import React from 'react';
import './Button.css';

//square button for num 1-9 and +,-,*,/
const SquareButton = (props) => {
    return(
        <button className={props.buttonStyle}>          {props.text}
        </button>
    )
};

export default SquareButton;