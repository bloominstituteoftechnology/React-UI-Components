import React from 'react';
import './Card.css';

export default function CardBanner({ title }) {
  return (
    <div className="card-header">
      <h3>{title}</h3>
    </div>
  );
}
