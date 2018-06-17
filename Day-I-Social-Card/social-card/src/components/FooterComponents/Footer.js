import React from 'react';
import './Footer.css';

let count = 0;
let countS = 0;

const Footer = () => {

    const handleClick = () => {
        count += 1;
        document.getElementsByClassName('count')[0].innerHTML = count;
    }
    const handleClickSyn = () => {
        countS += 1;
        document.getElementsByClassName('countSyn')[0].innerHTML = countS;
    }

    return (
        <div className='faIcons'>
            <i className="far fa-comment"></i>
            <i className="fas fa-sync-alt" onClick={handleClickSyn}></i><span className='countSyn'>0</span>
            <i className="far fa-heart" onClick={handleClick}></i><span className='count'>0</span>
            <i className="far fa-envelope"></i>
        </div>
    )
}
export default Footer;