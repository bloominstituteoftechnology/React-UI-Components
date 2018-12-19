import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer() {
    return (
        <a className="card-container" href="https://www.reactjs.org">
            <CardBanner/>
            <CardContent title="Get started with React" text="React makes it painless to create interactive UIs. Design simple views for each state in your application." linkName="reactjs.org"/>
        </a>
    )
}

// const container = document.querySelector(".container");
// container.addEventListener("click", function(e) {
    
// });
export default CardContainer;