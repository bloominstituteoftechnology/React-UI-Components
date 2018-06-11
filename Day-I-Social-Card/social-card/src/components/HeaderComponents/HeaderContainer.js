import React from 'react';
import './Header.css';
import './HeaderTitle.js';
import './ImageThumbnail.js';

const HeaderContainer = () => {
	return (
		<div className="header-container">
			<ImageThumbnail />
			<HeaderTitle />
		</div>
	
	);
};


export default HeaderContainer;
