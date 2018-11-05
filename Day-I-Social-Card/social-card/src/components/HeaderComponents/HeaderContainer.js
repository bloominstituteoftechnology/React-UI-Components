import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
  return (
    <div className="header">
      <div className="flex-img">
        <ImageThumbnail src="https://ibin.co/3whrpKSBbZ81.png"/>
      </div>
      <div className="flex-content">
        <HeaderTitle mainTitle='Lambda School' date="@LambdaSchool ᛫ 26 jan"/>
        <HeaderContent content="Let's learn React sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. React!"/>
      </div>
    </div>
  );
}

export default HeaderContainer;

