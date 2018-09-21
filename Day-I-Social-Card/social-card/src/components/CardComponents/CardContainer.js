import React from 'react';
import './Card.css';
import './CardBanner';
import Cardbanner from './CardBanner';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
	return (
		<a href="https://www.reactjs.org">
			<div id="cardContainer">
				<div id="smallerContainer">
					<CardBanner />
					<CardContent />
				</div>
			</div>
		</a>
	);
};

export default CardContainer;
