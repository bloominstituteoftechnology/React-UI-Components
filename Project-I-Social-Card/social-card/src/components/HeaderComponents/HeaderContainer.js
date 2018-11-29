import React from 'react';
import './Header.css';
import HeaderIMG from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'


const HeaderContain = (props) => {
	return (	
    	<div className="header">
    		<HeaderIMG />
    		<HeaderTitle/>
		</div>
	);
};

export default HeaderContain;