import React from 'react';
import './Card.css';

const CardContent = () => {
    return(
        <div>
            <p className = 'content-heading'>Get started with React</p>
            <p className = 'content'>React makes it painless to create interactive UIs.
            Design simple views for each state in your application.</p>
            <p className = 'content-foot'>reactjs.org</p>
        </div>
    )
}

export default CardContent;