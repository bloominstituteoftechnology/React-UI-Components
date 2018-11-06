import React from 'react';
import './Card.css';
import HeaderContent from './HeaderContent.js';

function CardContent(props) {
    return (
        <react.Fragment >
            <h1 className = "card title" > Get Started With React </h1>
            <p className = "card Para" > React makes it painless to create interactive UIs. Design simple views for each state in your application</p>

            <h5 className = "card titleb" ><a href="https://reactjs.org/"></a>  reactjs.org </h5>

        </react.Fragment>
    );
}

export default CardContent;
