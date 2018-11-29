import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'

const HeaderTitle = () => {
	return (
		<div className = "header_title">
			<h1>Lambda School</h1>
			<p>@LambdaSchool</p>
			<p>26 Jan</p>
			<HeaderContent />

		</div>
	);
};

export default HeaderTitle;
