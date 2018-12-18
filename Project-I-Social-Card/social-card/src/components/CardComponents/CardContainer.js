import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer() {
    return (
        <React.Fragment>
            <CardBanner/>
            <CardContent title="Get started with React"/>
            <CardContent text="React makes it painless to create interactive UIs. Design simple views for each state in your application."/>
            <CardContent linkName="reactjs.org"/>
        </React.Fragment>
    )
}


export default CardContainer;