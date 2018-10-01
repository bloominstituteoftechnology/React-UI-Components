import React from 'react';
import './Card.css';

const CardBanner = (props) => {
    return (
        <div className='bannerImg'>
            <a href='https://www.reactjs.org' target='_blank'><img src={'https://ibin.co/3wnC6SgIOJud.png'} alt='React Logo'/></a>
        </div>
    );
}

export default CardBanner;