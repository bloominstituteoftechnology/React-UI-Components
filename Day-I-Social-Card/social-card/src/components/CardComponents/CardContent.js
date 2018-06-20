import React from 'react';
import './Card.css';

const CardContent = () => {
   return (
       <div className="card-content">
       <p className="bottom-text">Get started with React</p>
        <p className="smaller-bottom-text">
        React makes it painless to make interactive UI's. Design simple views
        for each state in your application.</p>

        <a
        className="link">
        href="http://reactjs.org"
        reactjs.org
        </a>
       </div>   
   );
};

export default CardContent;
