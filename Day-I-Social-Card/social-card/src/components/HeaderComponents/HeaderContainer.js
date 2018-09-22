import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle.js';

import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
	return (           
        <div className="container">
         <ImageThumbnail/>
		<HeaderTitle />
        
        <HeaderContent />
        </div>
	)
};
export default HeaderContainer;