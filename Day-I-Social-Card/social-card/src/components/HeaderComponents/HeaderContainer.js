import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer=()=><div className='header-container'><ImageThumbnail/><div className='header-content-div'><HeaderTitle/><HeaderContent/></div></div>;
export default HeaderContainer;