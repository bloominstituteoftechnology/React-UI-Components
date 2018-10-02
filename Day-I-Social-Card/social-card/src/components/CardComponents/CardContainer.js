import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
//href="https://www.reactjs.org"

function referHandler(url) {
    window.location = 'http://'+url;
}

const CardContainer = props => (
    <div class="card-container" onClick={clickEvent => referHandler(props.postUrl)}>
        <CardBanner />
        <CardContent
            postTitle={props.postTitle}
            postUrl={props.postUrl}
        >
            {props.children}
        </CardContent>
    </div>
);

export default CardContainer;