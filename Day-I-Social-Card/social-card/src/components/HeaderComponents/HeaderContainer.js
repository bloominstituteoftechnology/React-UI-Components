import React from 'react';
import './Header.css';
import Thumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = (props) => {
   return (
       <div className="headerContainer">
        <Thumbnail />
        <HeaderContent />
       </div>
   );
}

export default HeaderContainer;
