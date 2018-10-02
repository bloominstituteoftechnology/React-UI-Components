import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardBanner = () => {
    return ( 
        <div className='banner'>
            <div className='inner-banner'>
                <img 
                    alt='banner'
                    className='image-banner'
                    src='https://ibin.co/3wnC6SgIOJud.png'
                />
            </div>
                <CardContent />
        </div>
     );
}
 
export default CardBanner;
