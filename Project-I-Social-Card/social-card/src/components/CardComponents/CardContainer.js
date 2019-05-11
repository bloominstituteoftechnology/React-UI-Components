import React from 'react';
import './Card.css';
import { ImageThumbnail } from '../HeaderComponents/ImageThumbnail';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import reactLogo from '../../assets/reactLogo.png';


const CardContainer = props => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <CardBanner 
                    reactLogo={reactLogo}/>
                <CardContent 
                    website="reactjs.org"
                    content="React makes it painless to create interactive UIs. Design simple views for each state in your application."
                    h1="Get Started With React"/>
            </div>
        </div>
    )
}

export default CardContainer;