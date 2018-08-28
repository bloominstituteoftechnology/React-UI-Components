import React from 'react';
import './Card.css';
import Footer from '../FooterComponents/Footer';

const CardContent = () => {
  return (
     <div className="card-content">
         <h3>Get Started with React </h3>
         <p>React makes it painless to create interactive UIs. Design simple views for 
            each state in your application.</p>
            <a href="http://reactjs.org" className="card-link">reactjs.org</a>
            <Footer />
     </div>
  
  );
};
export default CardContent;
