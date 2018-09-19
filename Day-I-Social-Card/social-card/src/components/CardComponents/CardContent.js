import React from 'react';
import './Card.css';

export const CardContent = (props) => {
    let embedTitle = "Get started with React";
    let embedContent = "React makes it painless to create interactive UIs. Design simple views for each state in your application."
    let embedLink = "reactjs.org"

    return (
      <div>
          <h3>{embedTitle}</h3>
          <p className="content">{embedContent}</p>
          <p className="embed-link">{embedLink}</p>
      </div>
    )
  }

export default CardContent;