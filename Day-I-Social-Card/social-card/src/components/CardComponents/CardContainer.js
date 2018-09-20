import React from 'react';
import './Card.css';
import './CardBanner';
import Cardbanner from './CardBanner';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
	return (
		<div id="cardContainer">
			<div id="smallerContainer">
				<CardBanner />
				<CardContent />
			</div>
		</div>
	);
};

export default CardContainer;
