import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const content = "Some content"
const title = `Get Started with react`
const url = `https://www.reactjs.org`
function CardContainer (props){
    return (
        <div class="cardContainer">
            <CardBanner url="https://ibin.co/3wnC6SgIOJud.png" alt="banner"/>
            <CardContent content={content} title={title} url={url}/>
        </div>
    )
}

export default CardContainer