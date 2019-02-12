import React from 'react';


const NumberButton = props => {
    return(
        <div className={props.buttonStyle}>
            {props.button}
        </div>
    );
}

export default NumberButton;