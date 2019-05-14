
import React from 'react';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContainer = () => {
	return (
		<div style={{ display: 'flex'  }}>
			<ImageThumbnail />
			<div>
				<HeaderTitle />
				<HeaderContent />
			</div>
		</div>
	);
};

export default HeaderContainer;
