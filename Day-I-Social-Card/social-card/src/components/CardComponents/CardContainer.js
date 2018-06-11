import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';


const CardContainer = () => {
    return (<div className="card-wrapper" onClick={()=>{window.location.href = 'http://www.reactjs.org'}}>
        <CardBanner />
    </div>);
}

export default CardContainer;

