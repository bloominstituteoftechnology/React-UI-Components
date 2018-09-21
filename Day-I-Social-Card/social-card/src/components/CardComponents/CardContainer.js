import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';
import Footer from '../FooterComponents/Footer.js';

const CardContainer = props => (<a className="anchor-wrapper" href="https://www.reactjs.org">
  <div className="card-container">
    <CardBanner/>
    <CardContent/>
    <Footer/>
  </div>
</a>)

export default CardContainer
