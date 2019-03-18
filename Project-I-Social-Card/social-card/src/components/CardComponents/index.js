import React from 'react';
import CardContainer from './CardContainer';
import './Card.css';

export default function CardComponent(props) {
  return <CardContainer className="card" {...props} />;
}
