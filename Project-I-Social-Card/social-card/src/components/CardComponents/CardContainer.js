import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer () {
    return (
        <div className="card-container">
            <CardBanner src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
            <CardContent header={cardContentHeaders[0]} text={cardContentTexts[0]} link={cardContentLinks[0]} />
        </div>
    );
}

const cardContentHeaders = ['Get started with React'];
const cardContentTexts = ['React makes it painless to create interactive UIs. Design simple views for each state in your application.'];
const cardContentLinks = ['reactjs.org'];

export default CardContainer;