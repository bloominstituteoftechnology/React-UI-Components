import React from 'react';
import './Card.css';

const CardContent = (props) => {
    let embedTitle = "Get started with React";
    let embedContent = "React makes it painless to create interactive UIs. Design simple views for each state in your application."
    let embedLink = "reactjs.org"

    return (
      <div className="embed-content">
          <h4>{embedTitle}</h4>
          <p className="content">{embedContent}</p>
          <p className="embed-link">{embedLink}</p>
      </div>
    )
  }

export default CardContent;
