import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
    return (
        <div className = 'card-container'>
            <CardBanner />
            <CardContent />
        </div>
    );
}

//CardContainer holds card components
//                                    CardBanner -> Display's this image as background -> https://ibin.co/3wnC6SgIOJud.png
//                                    CardContent -> Displays the card copy provided
//                                    CardContainer -> Should take a user to here on click -> https://www.reactjs.org

// CardContainer -> Should take a user to here on click -> https://www.reactjs.org
export default CardContainer;