import React from 'react';
import './Card.css';
import './CardBanner'
import CardBanner from './CardBanner';
import CardContent from './CardContent'




const CardContainer = () => {
    const click = () => {
        document.innerHTML = 'fdsfsd'
    }
    return (
        <a href="https://reactjs.org">
        <div onClick={this.click} className='card-container'>
            <CardBanner />
            <CardContent />
            
        </div>
        </a>
    )
}




export default CardContainer;
