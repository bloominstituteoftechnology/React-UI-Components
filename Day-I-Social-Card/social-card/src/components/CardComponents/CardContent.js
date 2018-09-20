import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContent">
            <h2 className="cardBanner-contentText--title">Get started with React</h2>
            <p className="cardBanner--contentText--text">React makes it painless to create interactive UIs. Design simple for each state in your application</p>
            <a className="cardBanner--contentText--link">reactjs.org</a>
        </div>
     );
  }
export default  CardContent;