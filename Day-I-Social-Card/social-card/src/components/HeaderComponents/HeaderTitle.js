import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
	return (
		<div className="lambda-heading-container">
			<h1 className="lambda-heading">Lambda School</h1>
			<p className="lambda-paragraph">@LambdaSchool</p>
			<p className="lambda-paragraph">{moment().format("Do MMM")}</p> 
		</div>
	)
};

export default HeaderTitle;
