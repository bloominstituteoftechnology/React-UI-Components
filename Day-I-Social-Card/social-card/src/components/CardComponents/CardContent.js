import React from 'react';
import './Card.css';

const CardContent = props => (<div className="card-container__card-content">
  <h2 className="header-container__h2 title-margin-small">Get started with React</h2>
  <p className="p-margin-small header-container__text-content">React makes it painless to create interactive UIS. Design simple views for each state in your application.</p>
  <span className="header-container__title header-container__text-content">reactjs.org</span>
</div>)

export default CardContent
