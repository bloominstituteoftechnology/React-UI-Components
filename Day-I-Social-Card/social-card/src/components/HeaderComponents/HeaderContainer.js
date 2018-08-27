import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';



const Header = () => (
  <div className="header-container">
  <ImageThumbnail />
  <div className="header-text">
  <HeaderTitle />
  <HeaderContent />
  </div>
  </div> //container
);

export default Header;
