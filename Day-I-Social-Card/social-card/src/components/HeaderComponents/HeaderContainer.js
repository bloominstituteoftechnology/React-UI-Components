import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail'

const HeaderContainer = () => {
	return <div className="header-wrapper">
		<div className="header-img-wrapper">
			<ImageThumbnail />
		</div>
		<div className="header-content-group">
			<HeaderTitle />
			<HeaderContent />
		</div>
	</div>	
}

export default HeaderContainer;