import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
	return (
	<div className="header">
	<HeaderTitle />
	<HeaderContent />
	<p> this is hard to get </p>
	</div>
	);
};

export default HeaderContainer;