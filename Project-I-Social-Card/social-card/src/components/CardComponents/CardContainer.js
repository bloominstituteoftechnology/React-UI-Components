import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';

const CardContainer = () => {
    return(
        <div className='container'>
            <div className='left'>
                <ImageThumbnail />
            </div>
            <div className='right'>
                <HeaderContainer />
                <CardContent />
                <CardBanner />
            </div>
        </div>
    );
}

export default CardContainer;