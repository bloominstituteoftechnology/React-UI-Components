import React from 'react';
import './Footer.css';


let heart = 0;

// function clickTest () {
//     reload += 1;
//     console.log('yup');
//     return reload;
// }


const Footer = (props) => {
    let reload = 0;
    function clickTest () {
        reload += 1;
        console.log('yup');
        return reload;
    };
    
    return (
        <div className="icons">
            <i class="far fa-comment"></i>
            <i class="fas fa-sync-alt" onClick={clickTest}> {reload}</i>
            <i class="far fa-heart"> {heart}</i>
            <i class="far fa-envelope"></i>
        </div>
    );
};

export default Footer;