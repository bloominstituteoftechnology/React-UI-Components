import React from 'react';



const NumberButton = props => {

    if(typeof props.text === 'number'){
        return(
            <button className={props.class}>{props.text.toString()}</button>
         );
    }
    return(
       <button className={props.class}>{props.text}</button>
    );
}

export default NumberButton;