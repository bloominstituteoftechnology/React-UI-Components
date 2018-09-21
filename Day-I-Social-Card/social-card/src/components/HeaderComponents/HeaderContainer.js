import React from 'react';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import './Header.css';

class HeaderContainer extends React.Component {
  render() {
    return (
      <div className='header-container'>
        <ImageThumbnail />
        <div>
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
