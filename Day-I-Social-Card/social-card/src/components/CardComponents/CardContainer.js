import React from 'react';
import './Card.css';
import CardImg from "./CardImg";
import CardContent from "./CardContent";

const CardContainer = () => (
    <a className="card" href="https://www.reactjs.org">
            <CardImg image="https://ibin.co/3wnC6SgIOJud.png" />
            <CardContent title="Get started with React" body="React makes it painless to create interactive UIs. Design simple views for each state in your application." site="reactjs.org" />
    </a>
);

export default CardContainer;