import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';
import Footer from '../FooterComponents/Footer';


const CardContainer = () => 
<div class="cardContainer">
    <div class="border">
        <CardBanner />
        <CardContent />
    </div>
    <Footer />
</div>;



export default CardContainer;