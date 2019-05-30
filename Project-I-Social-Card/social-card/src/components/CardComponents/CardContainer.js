import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

export default function CardContainer() {
  return (
    <div>
      <CardBanner />
      <CardContent/>
    </div>
  )
}
