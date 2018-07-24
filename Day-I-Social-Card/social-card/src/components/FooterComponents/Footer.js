import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <img className='comment' src={'https://ibin.co/44xlP0ABev28.png'}/>
            <div className='share'>
            <img src={'https://ibin.co/44xlmPyeKO8e.png'} onClick={() => {
                let button = document.querySelector('.share-count');
                shareCount++;
                button.innerHTML = shareCount;
            }}/>
            <p className='share-count'></p>
            </div>
            <div className='heart'>
            <img src={'https://ibin.co/44xl8SDNdsyU.png'} onClick={() => {
                let button = document.querySelector('.heart-count');
                heartCount++;
                button.innerHTML = heartCount;
            }}/>
            <p className='heart-count'></p>
            </div>
            <img src={'https://ibin.co/44xmBhw6oGrm.png'}/>
        </div>
    );
};

let shareCount = 0;
let heartCount = 0;

export default Footer;

