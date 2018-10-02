import React from 'react';
import './Card.css';
import Img from './CardBanner';
import CardContent from './CardContent';
const CardContainer = () =>{
    return(<div className="Card">
        <Img />
        <CardContent />
    </div>);
}
export default CardContainer