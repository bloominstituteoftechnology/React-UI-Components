import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import HeaderIMG from './ImageThumbnail'

const HeaderTitle = () => {
	return (
		<div className = "header_title">
			<HeaderIMG />
			<h1>Lambda School</h1>
			<h3>@LambdaSchool</h3>
			<h3>26 Jan</h3>


		</div>
	);
};

export default HeaderTitle;
 