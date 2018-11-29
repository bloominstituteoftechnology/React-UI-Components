import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardContentContainer from '../CardComponents/CardContentContainer'

const CardContainer= ()=>{
    return(
        <div className="card-container">
            <HeaderContainer />
            <CardContentContainer />
        </div>
    )
}

export default CardContainer;