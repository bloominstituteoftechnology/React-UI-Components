import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardContentContainer from '../CardComponents/CardContentContainer'

const CardContainer= ()=>{
    return(
        <a className="card-container" href="https://www.reactjs.org">
            <HeaderContainer />
            <CardContentContainer />
        </a>
    )
}

export default CardContainer;