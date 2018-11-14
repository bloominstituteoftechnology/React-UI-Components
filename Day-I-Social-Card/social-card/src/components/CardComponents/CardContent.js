import React from 'react';
import './Card.css';
import '../../App.css';

function CardContent(props) {
    return (
        <React.Fragment>
          <h1 className="header">Get Started with React</h1>
          <p className="header" id="para">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
        </React.Fragment>
      );
  }


export default CardContent;