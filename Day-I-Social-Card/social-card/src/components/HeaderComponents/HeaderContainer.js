import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
const HeaderContainer = () => {
	return (
		<div className="header-Container">
			<ImageThumbnail />
			<div className="header-content-title-container">
				<HeaderTitle />
				<HeaderContent />
			</div>
		</div>
	)
};

export default HeaderContainer;