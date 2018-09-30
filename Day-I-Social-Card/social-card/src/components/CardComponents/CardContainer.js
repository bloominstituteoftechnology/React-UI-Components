import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardContent from './CardContent';


const CardContainer = () => {
	return (
		<div className="Container"><CardBanner/><CardTitle/><CardText /><CardContent/></div>
        
	)
};

export default CardContainer;