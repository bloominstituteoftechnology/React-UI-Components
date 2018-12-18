import React from 'react';
import './Card.css';


const CardContent = () => {
  return (
    <div className="card-content">
      <h5>Get started with React</h5>
      <p className="card-content--p">
        React Makes it painless to create interactive UIs. Design simple views for each state in your application.
      </p>
      <div className="card-content--a">
        <a  href="https://reactjs.org" target="blank_">reactjs.org</a>
      </div>
    </div>
  )
}

export default CardContent;