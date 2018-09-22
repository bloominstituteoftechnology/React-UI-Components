import React from 'react';
import './Header.css';

import Logo from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
	return (
        <div className= "header-container">
                <Logo />
	        <HeaderTitle />
        </div>
	)
};

export default HeaderContainer;