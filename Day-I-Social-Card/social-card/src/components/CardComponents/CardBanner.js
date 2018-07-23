import React from 'react';
import './Card.css';
import BannerImg from '../../assets/card-banner.png';


const CardBanner = () => {
    return (
        <div>
            <img src={BannerImg} className="card-banner"/>
        </div>
    )
}

export default CardBanner;