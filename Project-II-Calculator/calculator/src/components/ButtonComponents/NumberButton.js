import React from 'react';
import './Button.css';


const ButtonContainer = props => {
    return (
            // set class name for each button div
        <div className = {props.style}>
                {props.text}  
        </div>
    ); // don't forget semicolon ending
}; // don't forget semicolon ending



export default ButtonContainer;