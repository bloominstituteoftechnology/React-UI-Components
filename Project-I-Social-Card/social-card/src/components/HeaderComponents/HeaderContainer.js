import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const Header = props => {
  return (
    <div className='header flexy'>
      <div>
        <ImageThumbnail />
      </div>
      <div>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

export default Header;
