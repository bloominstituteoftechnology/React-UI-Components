import React from 'react';
import './Button.css';

const NumberButton = props => {
   let buttonType = '';
    if (typeof props.number.display === 'number'){
        buttonType = 'number-button';
   } else {
       buttonType='operator-button';
   }
   

    return (
        <div className = {`${buttonType}`} >
            {props.number.display}
        </div>
    );
};

export default NumberButton;