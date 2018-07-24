import React from 'react';


import ImageThumbnail from './ImageThumbnail';
import ContentContainer from './ContentContainer';

import './Header.css';


const HeaderContainer = () => {
	return (
		<div className="header-wrapper">
			<ImageThumbnail />
			<ContentContainer />
		</div>
	);
};

export default HeaderContainer;