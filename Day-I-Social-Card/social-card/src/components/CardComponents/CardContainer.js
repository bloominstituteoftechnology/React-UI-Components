import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = (props) =>{

    const handleClick = () =>{
        document.querySelector('.card-content a').click();
    };

    return (
        <div className="card-container" onClick={handleClick}>
            <CardBanner />
            <CardContent />
        </div>

    )

}

export default CardContainer;