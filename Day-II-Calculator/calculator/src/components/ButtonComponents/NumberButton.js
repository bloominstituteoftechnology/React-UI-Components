import React from 'react';



const NumberButton = props => {
    
    // check if an integer and convert to string if true
    if(typeof props.text === 'number'){
        return(
            //returns converted integer into string
            <button className={props.class}>{props.text.toString()}</button>
         );
    }

    return(
       <button className={props.class}>{props.text}</button>
    );
}

export default NumberButton;