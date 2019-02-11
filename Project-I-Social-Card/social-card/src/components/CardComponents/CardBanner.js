import React from 'react';
import CardBannerImage from './CardBannerImage';
import CardBannerDescription from './CardBannerDescription';


const CardBanner = () => {
    return(
        <div className="card-banner-container">
            <div className="card-banner-img">
                <CardBannerImage />
            </div>
            <div className="card-banner-description">
                <CardBannerDescription />
            </div>
        </div>
    );
}

export default CardBanner;