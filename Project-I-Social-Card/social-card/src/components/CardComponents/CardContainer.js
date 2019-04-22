import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props =>{

    return (
        <a className="none" href="https://www.reactjs.org"><div className = "container-card">
        <img className="container-card padding-left" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
            <CardBanner />
            <CardContent />
        </div>
        </a>

    )
}

export default CardContainer
