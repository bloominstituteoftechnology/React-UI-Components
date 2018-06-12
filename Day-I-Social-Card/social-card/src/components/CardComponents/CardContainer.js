import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './cardContent';

const CardContainer = () => {
	return (
		<div className="card-container">
		<CardBanner />
		<CardContent />
		</div>
		)
	}

export default CardContainer
