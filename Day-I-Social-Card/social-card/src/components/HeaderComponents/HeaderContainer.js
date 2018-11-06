import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';




function HeaderContainer() {
    return <div className="HeaderContainer">
      <ImageThumbnail />
      
      <HeaderContent />

    </div>

    
  }
  



export default HeaderContainer; 

