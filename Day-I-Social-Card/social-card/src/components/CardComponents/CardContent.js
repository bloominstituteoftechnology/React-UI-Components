import React from 'react';
import './Card.css';

function CardContent(){
    return(
     <React.Fragment>
        <h4>Get started with React</h4>   
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        <p className='stamp'>react.js.org</p>
     </React.Fragment>
    );
}

export default CardContent;