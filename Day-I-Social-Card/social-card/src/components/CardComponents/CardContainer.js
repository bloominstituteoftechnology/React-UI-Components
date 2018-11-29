import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import Footer from "../FooterComponents/Footer";

const CardContainer=()=>{

    return (
        <div className="card-container">
        <a href ="https://www.reactjs.org">

        <CardBanner />
        <CardContent />
        <Footer/>

       </a>
        </div>
);
}
export default CardContainer;

