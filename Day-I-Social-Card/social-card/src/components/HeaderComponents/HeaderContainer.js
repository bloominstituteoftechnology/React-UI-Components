import React from 'react';

import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

import './Header.css';


const HeaderContainer = () => {
	return (
		<div className="header-wrapper">
			<HeaderTitle />
			<HeaderContent />
		</div>
	);
};

export default HeaderContainer;