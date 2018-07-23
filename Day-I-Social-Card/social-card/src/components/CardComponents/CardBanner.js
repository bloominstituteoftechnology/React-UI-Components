import React from 'react';
import './Card.css';
import BannerImg from '../../assets/card-banner-1.png';


const CardBanner = () => {
    return (
        <div>
           <a href="https://www.reactjs.org" target="_blank" >
            <img src={BannerImg} className="card-banner"/>
            </a>
        </div>
    )
}

export default CardBanner;