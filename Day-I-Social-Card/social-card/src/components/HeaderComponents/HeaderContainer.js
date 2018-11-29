import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
	return (
		<div className="header">
			<ImageThumbnail />
			<HeaderTitle />
		</div>
	);
};
// ReactDOM.render(<ImageThumbnail />, document.getElementsByClassName('header'));
export default HeaderContainer;
