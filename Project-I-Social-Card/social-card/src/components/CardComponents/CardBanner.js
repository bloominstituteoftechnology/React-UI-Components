import React from 'react';
import './Card.css';

function CardBanner() {
    return (
        <a className="banner-container-wrapper" href="https://reactjs.org">
            <img 
                alt="react logo"
                className="banner-img"
                /* "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" 
                    "https://ibin.co/3wnC6SgIOJud.png"
                */
                src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
            />
        </a>
    );
}

export default CardBanner;