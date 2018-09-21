import React from 'react';
import './Card.css';

const CardContainer = () => {
    return (<div className="cc-main">
      <a href="https://www.reactjs.org">
        <CardBanner />
        <CardContent />
      </a>
    </div>);
  };
  
  const CardBanner = () => {
    return (<div>
      <img src="https://ibin.co/3wnC6SgIOJud.png" alt ="React Logo"></img>
    </div>);
  };
  
  const CardContent = () => {
    return (<div className="cc-main-card-content">
      <h4>Get started with React</h4>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p className="cc-main-link">reactjs.org</p>
    </div>
    );
  };

  export default CardContainer;