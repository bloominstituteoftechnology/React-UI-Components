import React from 'react';
import CardBanner from './cardBanner';
import CardContent from './cardContent';
import './Card.css';

const CardContainer = () => (
	<main className="card">
		<CardBanner />
		<CardContent />
	</main>
);

export default CardContainer;