import React from 'react';
import './Header.css';
import HeaderIMG from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContain = (props) => {
	return (	
    	<div className="header">
    		<HeaderTitle/>
    		<HeaderContent/>
		</div>
	);
};

export default HeaderContain; 