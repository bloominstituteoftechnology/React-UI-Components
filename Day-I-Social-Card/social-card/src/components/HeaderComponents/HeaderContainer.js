import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = (props) => {
	return (
			<div class = 'HeaderContainer'>
				<ImageThumbnail />
				<HeaderTitle />
				<HeaderContent />
			</div>
		);
};

export defaut HeaderContainer;