import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => <a href = "https://www.reactjs.org" className = "card-container"> <CardBanner /><CardContent /> </a>;

export default CardContainer;
