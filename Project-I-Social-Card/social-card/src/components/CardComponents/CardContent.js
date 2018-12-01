import React from 'react';
import './Card.css';

const CardContent = props => {
    return(
      <div className="card-text-content">
        <h3>Getting started with React</h3>
        <p>React makes it painless to create interactive UIs. Design simple veiws for each state in your application.</p>
        <p className="small">reactjs.org</p>
      </div>
    );

};

export default CardContent;