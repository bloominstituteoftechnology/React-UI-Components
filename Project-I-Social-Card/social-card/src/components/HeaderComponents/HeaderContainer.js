import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderConent from './HeaderContent.js';
const HeaderContainer = () => {
	return (
		<div className="headercontainer">
			<ImageThumbnail />
		
			<HeaderConent />
		</div>
	);
};

export default HeaderContainer;
