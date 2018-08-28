import React from 'react';
import './Header.css';

import HeaderTitle from '../HeaderComponents/HeaderTitle';
import HeaderContent from '../HeaderComponents/HeaderContent';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';

const HeaderContainer = () => (
	<div className="flex">
		<div className="flex-section1">
			<ImageThumbnail />
		</div>
		<div className="flex-section2">
			<HeaderTitle />
			<HeaderContent />
		</div>
	</div>
);

export default HeaderContainer;

