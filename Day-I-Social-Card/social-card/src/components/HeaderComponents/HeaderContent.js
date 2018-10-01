import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js'
import HeaderImage from './ImageThumbnail.js'

const HeaderContent = props => {
  return (
    <div className='header-content'>
      <HeaderImage />
      <HeaderTitle />
    </div>
  )
}

export default HeaderContent;