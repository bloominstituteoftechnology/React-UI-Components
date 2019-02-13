import React from 'react';


const NumberButton = props => {
    return(
      
            <button className={props.buttonStyle}>{props.text}</button>
      
    );
}

export default NumberButton;