import React from 'react';
import './Button.css';

const ButtonContainer = props => {
    return (    
        <div className='button-container'>{props.children}</div>
    );   
};    

export default ButtonContainer;