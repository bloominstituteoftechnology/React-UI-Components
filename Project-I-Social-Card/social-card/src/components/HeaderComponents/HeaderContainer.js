import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail'


function HeaderContainer() {
	return (
		<div className="Header">
			<ImageThumbnail />
	
			<HeaderContent />
		</div>
	);
}
export default HeaderContainer;
