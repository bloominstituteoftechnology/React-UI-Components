import React from 'react';
import './Card.css';

const CardContent = () => {
	return (
		<div className="cardcontent">
			<div className="cardtitle">Get Started with React</div>
			<div className="cardstatus">
				React makes it painless to create interactive UIs. Design simple views
				for each state in your application.
			</div>
			<a className="cardlink" href="https://www.reactjs.org" target="#">
				reactjs.org
			</a>
		</div>
	);
};

export default CardContent;
