import React from 'react';

// import styling
import './Header.css';

// import components
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = () => (
  <div className="header-container">
    <ImageThumbnail />
    <div>
      <HeaderTitle />
      <HeaderContent />
    </div>
  </div>
)

export default HeaderContainer