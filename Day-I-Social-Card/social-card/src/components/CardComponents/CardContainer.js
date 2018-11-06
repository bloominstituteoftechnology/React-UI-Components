import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';


function CardContainer(props) {
    return (
        <div>
            <div className="cardBannerDiv">

                <CardBanner />
            </div>
            <div className="cardContentDiv" >

                <CardContent />

            </div>
        </div>


    );
};




export default CardContainer;
