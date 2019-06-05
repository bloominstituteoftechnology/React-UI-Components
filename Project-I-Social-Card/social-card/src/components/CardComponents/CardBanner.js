import React from 'react';
import './Card.css';
import CardContent from './CardContent';

// Create a <CardBanner /> component that will display this image as it's background: https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png

function CardBanner(){
    return (
        <a className="banner-box" href="https://www.reactjs.org">
            <img className="react-image" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="react banner"></img>
            <CardContent />
        </a>
    );
}

export default CardBanner;
