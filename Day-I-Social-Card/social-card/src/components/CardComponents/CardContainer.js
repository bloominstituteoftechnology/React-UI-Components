import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => (
    <a className="card-link" href="https://www.reactjs.org">
        <div className="card-container">
            <CardBanner image="https://ibin.co/3wnC6SgIOJud.png" />
            <CardContent title="Get started with React" body="React makes it painless to create interactive UIs. Design simple views for each state in your application." site="reactjs.org" />
        </div>
    </a>
);

export default CardContainer;