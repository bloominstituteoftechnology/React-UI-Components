import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js'
import HeaderTitle from './HeaderTitle.js'
import HeaderContent from './HeaderContent.js'

const HeaderContainer = (props) => {
  return (
    <header className='header-container'>
      <ImageThumbnail thumbnail={props.thumbnail} />
      <div className='text-container'>
        <HeaderTitle name={props.name} handle={props.handle} date={props.date} />
        <HeaderContent />
      </div>
    </header>
  );
}

export default HeaderContainer;