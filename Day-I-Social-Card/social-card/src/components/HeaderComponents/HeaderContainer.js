import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
	return (
		<div className="container">
			<div className="logo">
				<ImageThumbnail />
			</div>

			<div className="text">
				<HeaderTitle />
				<HeaderContent />
			</div>
		</div>
	);
};

export default HeaderContainer;
