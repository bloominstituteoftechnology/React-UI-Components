import React from 'react';
import './Card.css';


const CardContent = () => {
	return (
	    <div className='main-content'>
	    <div className="content-title">
		    	<h2 className='title'> Get started with React </h2>
		    	</div>
				 	<p className="description"> React makes it painless to create interactive UI. Design simple views for each state in your application.</p>
				<div className="link-container">
 					 <a href="https://www.reactjs.org" target="_blank" className="react-link">reactjs.org</a>
  			</div>
		</div>
	)
};

export default CardContent;
