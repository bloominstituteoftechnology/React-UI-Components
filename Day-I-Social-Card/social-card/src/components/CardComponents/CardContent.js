import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = () => {
	return (
		<div>
            <CardBanner />
			<h1>Get started with React</h1>
			<p>React makes it paniless to create interactive UIs. Design simple views for each state in your application.</p>
            <p>reactjs.org</p>
		</div>
	)
};

export default CardContent;