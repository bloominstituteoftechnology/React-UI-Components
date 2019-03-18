import React from 'react';
import CardContent from './CardContent';
import CardBanner from './CardBanner';
import './Card.css';

export default function CardContainer(props) {
  return (
    <div className="card">
      <CardBanner title={props.title} />
      <CardContent body={props.body} />
    </div>
  );
}
