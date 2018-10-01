import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
    const goToLink = () => {
        window.location.href = 'https://www.reactjs.org'
    };
    return (
        <div className='container'>
            <div className='card-container' onClick={goToLink}>
                <CardBanner src='https://ibin.co/3wnC6SgIOJud.png'/>
                <CardContent 
                    title={'Get Started with React'}
                    desc={'React makes it painless to create interactive UIs. Design simple views for each state in your application.'}
                    url={'reactjs.org'}
                />
            </div>
        </div>
    );
}

export default CardContainer;