import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';

const CardContent = () => (
    <div className="card-content">
        <CardBanner />
        <div className="text">
        <h1 className="title">Get started with React</h1>
        <p className="maintext desc">React makes it painless to create interactive UIs. Design simple views for each state in your applications.</p>
        <p className="greytext source">reactjs.org</p>
        </div>
        
    </div>

);

export default CardContent;