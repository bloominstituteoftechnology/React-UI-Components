import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import Footer from '../FooterComponents/Footer';

const CardContent = () =>{
  return(
    <div className="content">
      <CardBanner/>
      <div className="content-banner">
        <h3>Get started with React</h3>
        <p>React make it painless to create interactive UI.Design
          simple views for each state in your application.
        </p>
        <h4>reactjs.org</h4>
      </div>
      <Footer/> 
    </div>
  );
}

export default CardContent;