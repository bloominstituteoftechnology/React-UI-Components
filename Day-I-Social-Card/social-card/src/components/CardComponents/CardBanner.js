import React from 'react';
import './Card.css';

const CardBanner = () => {
    return (
        <a className='card-banner' href='https://reactjs.org'>
            <img
                alt='React logo'
                className='banner-img'
                src='https://ibin.co/3wnC6SgIOJud.png'
            />
        </a>
    );
}

export default CardBanner;
