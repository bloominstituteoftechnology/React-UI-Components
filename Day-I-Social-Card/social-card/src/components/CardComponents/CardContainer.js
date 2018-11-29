import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
	return (
		<a href="https://www.reactjs.org">
			<div className="card-container">
				<CardBanner />
				<CardContent />
			</div>
		</a>
	);
};

// const Cards = document.querySelector('.card-container');
// Cards.addEventListener('click', () => {
// 	// return <a href="https://www.reactjs.org" />;
// });

export default CardContainer;
