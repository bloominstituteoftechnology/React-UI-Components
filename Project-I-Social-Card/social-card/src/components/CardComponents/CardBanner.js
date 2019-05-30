import React from 'react';
import './Card.css';
import CardContent from './CardContent';

function CardBanner (){
    return (
<a className = 'cardBanner' href= 'https://www.reactjs.org'>
<img className = 'reactImage' src ="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"></img>
<CardContent />
</a>
    )
}

export default CardBanner;