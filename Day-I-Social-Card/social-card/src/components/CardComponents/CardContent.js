import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
    <section className="banner-border">
    <div >
  <h6> Get started with React</h6>
     </div>
     <div>
         <p className= "card-p">React makes it paineless to create interactive UIs. Design simple views for each state in your application.</p>
         </div>
         <div><small> <a href="https://www.reactjs.org" onClick={CardContent}>
      reactjs.org
    </a></small></div>
     </section>
    );
};

export default CardContent;