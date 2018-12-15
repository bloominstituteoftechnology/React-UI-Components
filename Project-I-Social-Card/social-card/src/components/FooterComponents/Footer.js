import React from 'react';
import './Footer.css';


let number = 0;

const updateNumber = () =>{
    number += 1;
    console.log(number);
};

const Footer = () => {
    return(
        <div className="footer">
            <i className="material-icons" onClick={updateNumber}>chat_bubble_outline</i>
            <i className="material-icons" onClick={updateNumber}>autorenew</i>
            <i className="material-icons" onClick={updateNumber}>favorite_border</i> 
            <i className="material-icons" onClick={updateNumber}>mail_outline</i>
            
            <h1>Number of times buttons have been pressed: </h1>
        </div>
    )
    
};


export default Footer;