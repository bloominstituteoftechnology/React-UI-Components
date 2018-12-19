import React from 'react';
import './Card.css';

const CardContent = () =>{
    return (
        <div>
                <h5>Get Started with React</h5>
                <p style={{fontSize:"0.8rem"}}>React makes painless to create interactive UIs.Design simple views for each state in your application
                </p>
                <a href={"https:reactjs.org"} 
                style={{textDecoration:"none",fontSize:"0.8rem",color:"gray"}}>
                reactjs.org</a>
        </div>

    )
}

export default CardContent;