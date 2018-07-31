import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import HeaderContainer from '../HeaderComponents/HeaderContainer'

const CardContainer = () => {
    //nest divs in the container
    return <div className="container-wrapper"> <HeaderContainer /> <CardContent /> </div>
};

export default CardContainer;