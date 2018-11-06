import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer() {
    function CardLink(e){
        e.preventDefault
        window.open('https://www.reactjs.org')
    }
    return(
        <div className="card"><div className="cardContent" onClick= {(e) => CardLink(e)}>
        {/* <a href="https://www.reactjs.org" > */}
            <CardBanner />
            <CardContent />
        {/* </a> */}
        </div>
        </div>

    );
}

export default CardContainer;


