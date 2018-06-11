import React from 'react';
import './Card.css';

const CardTitle = () =>  <h1 className="card-title">Get started with React</h1>
const CardSmallText =() => <a className="card-small-text" href="https://www.reactjs.org">reactjs.org</a>
const CardParagraph =() => <p className="card-paragraph">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>


const CardContent = () => {
        return(
                <div className="card-content">
                <CardTitle />
                <CardParagraph />
		<CardSmallText />
                </div>
        );
};

export default CardContent;
