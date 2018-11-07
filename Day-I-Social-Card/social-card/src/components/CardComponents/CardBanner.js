import React from 'react';
import './Card.css';

function CardBanner() {
    return (
        <div className = "Card">
        <img src='https://ibin.co/3wnC6SgIOJud.png' className= "Banner" alt='bckground'/>
        <h3 className='cardtitle'>Get Started with React</h3>
        <h4 className="cardtext">React makes it painless to create interactive UIs. Design simple views for each state in your application.</h4>
        <h5 className="cardsite">reactjs.org</h5></div>
    );
}

export default CardBanner;