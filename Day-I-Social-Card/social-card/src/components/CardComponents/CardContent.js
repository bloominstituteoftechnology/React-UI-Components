import React from 'react';
import CardBanner from './CardBanner'
import './Card.css';

const CardContent = () => (    
    <div>
        <CardBanner/>
        <div className ="cardContent">
            <h3>Get started with React</h3>
            <br/>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>\
            <br/>
            <small>reactjs.org</small>
        </div>
    </div>
)
    
export default CardContent
