import React from "react";
import "./Card.css";

const CardContent = () => {
	return (
		<div className="card__content">
			<p className="card__content--bold">Get Started with react</p>
			<p>
				React makes it painless to createe interactive UIs. Design
				simple views for each state in your application.
			</p>
			<p className="card__content--gray">reactjs.org</p>
		</div>
	);
};

export default CardContent;
