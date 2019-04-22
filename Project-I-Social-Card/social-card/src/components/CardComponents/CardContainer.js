import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

export default function CardContainer(props) {
    return (
        <div className="card-container">
            <CardBanner 
                src="https://facebook.github.io/create-react-app/img/logo-og.png" 
                alt="react logo" 
            />
            <CardContent 
                title="Get started with React"
                body="React makes it painless to create interactive UIs. Design simple views for each state in your application" 
            />
        </div>
    )
}