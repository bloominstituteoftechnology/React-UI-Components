import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
    return (
        <div className="card">
            <div className="left-side"> <p></p> </div>
            <div className="right-side">
                <a className="link" href="https://www.reactjs.org">
                    <CardBanner/>
                    <CardContent className="hey"/>
                </a>
            </div>
        </div>
    )
}

export default CardContainer;