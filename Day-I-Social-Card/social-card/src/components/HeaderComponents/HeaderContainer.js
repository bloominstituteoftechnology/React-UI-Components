import React from 'react';
import './Header.css';
// import header content, title, img
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => (
    <div className = 'HeaderStuff'>
    <ImageThumbnail />
    <HeaderTitle />
   {/*  <HeaderContent /> */}
    </div>
)
export default HeaderContainer

// this holds all the other header bits, HeaderContent, HeaderTitle, Image thumbnail
// Header Content = 'Let's learn'
// Header Title = 'Lambda School', date etc
// Image Thumbnail = ^ logo

// export default HeaderContainer