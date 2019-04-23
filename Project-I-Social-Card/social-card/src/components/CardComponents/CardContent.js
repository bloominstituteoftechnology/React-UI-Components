import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';


function CardContent () {
    return(
        <div className = "cardWrapper">
            <a href="http://reactjs.com">
                <CardBanner />
                <div className = "cardTitle">Get started with React</div>
                <div className = "cardContent">React makes it painless wto create interactive UIs. Design simple view for each state in your Application.</div>
                <div className = "cardLink">reactjs.org</div>
            </a>
        </div>
    )
}

export default CardContent; 