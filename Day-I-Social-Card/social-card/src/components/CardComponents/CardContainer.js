import React from 'react';
import './Card.css';

import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';

const CardContainer = () => (
	<div className="spacing">
		<div className="border">
			<CardBanner />
			<CardContent />
		</div>
	</div>
);


export default CardContainer;
