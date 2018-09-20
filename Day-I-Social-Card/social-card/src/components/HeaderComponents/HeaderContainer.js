import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';


 const HeaderContainer = (props) => {
    return (
      <div class="Header-Container">
        <ImageThumbnail />
        <div class="Text-Content">
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    );
 }
 export default HeaderContainer;