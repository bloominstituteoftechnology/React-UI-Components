import React from 'react';
import './Card.css';
import ImageBanner from './CardBanner.js';
import CardContent from './CardContent.js';
const CardDiv = () => {
    return (
        <section class="card">
	  <ImageBanner />
	  <CardContent/>
	</section>
    );
};

export default CardDiv;
