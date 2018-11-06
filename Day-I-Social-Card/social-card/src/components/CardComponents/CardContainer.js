import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';


function CardContainer(props) {
    return (
        <div>
            <div>

                <CardBanner />
            </div>
            <div>

                <CardContent />

            </div>
        </div>


    );
}




export default CardContainer;
