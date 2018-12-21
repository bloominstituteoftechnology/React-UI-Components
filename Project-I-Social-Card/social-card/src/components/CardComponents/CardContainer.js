import React from 'react';
import './Card.css';
import CardContent from './components/CardComponents/CardContent';
import CardBanner from './components/CardComponents/CardBanner';

function CardContainer (){
    return(
        <React.Fragment>
            <p>Card</p>
            <CardContent title='Card Content'/>;
            <CardBanner  title='Card Content'/>;
        </React.Fragment>
    )
}

export default CardContainer;
