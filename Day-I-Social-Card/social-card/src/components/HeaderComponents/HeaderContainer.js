import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle.js';

import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
	return (
        <div className="bigger-container">
        <ImageThumbnail/>
        <div className="container">
         
		<HeaderTitle />
        <HeaderContent />
        </div>
        </div>
	)
};
export default HeaderContainer;