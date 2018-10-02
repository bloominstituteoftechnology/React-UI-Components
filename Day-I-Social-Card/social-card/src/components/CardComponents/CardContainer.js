import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';


//Creating CardContainer component 

const CardContainer = () => {
	return (
		<div>
			<CardBanner /> 
			<CardContent />
		</div>
	);	
}


export default CardContainer;