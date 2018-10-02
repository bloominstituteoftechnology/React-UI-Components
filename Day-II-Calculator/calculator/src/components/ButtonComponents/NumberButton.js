import React from 'react';



const NumberButton = props => {
    return(
       <button style={props.buttonStyle}>{props.text}</button>
    );
}

export default NumberButton;