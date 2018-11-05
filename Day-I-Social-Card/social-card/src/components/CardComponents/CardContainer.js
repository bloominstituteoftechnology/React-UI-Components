import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return(
        <div className ="container">
            <a href="https://reactjs.org">
            <div className="card__container"  href="https://reactjs.org">
            <CardBanner src= 'https://ibin.co/3wnC6SgIOJud.png'/>
            <CardContent 
                title='Get started with React' 
                text='React makes it painless to create interactive UIs. Design simple views for each state in your application.'
                handle="reactjs.org"/>
            </div>
            </a>
        </div>
    );
}
export default CardContainer;