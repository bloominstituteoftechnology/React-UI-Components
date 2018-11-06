import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
        <React.Fragment>
            <div className="card-content">
                <h3>{props.title}</h3>
                <p> {props.content}</p>
                <h4>react.js</h4>
            </div>
        </React.Fragment>
    );
  }

  export default CardContent;
