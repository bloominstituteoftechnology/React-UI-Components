import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';



const CardContainer = (props) => {
    return ( 
        <div className='banner-container'>
            <CardBanner />
            <h1>Hello {props.person.name}</h1>
        </div>
     );
}
 
export default CardContainer;
