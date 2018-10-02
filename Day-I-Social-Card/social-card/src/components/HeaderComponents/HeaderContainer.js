import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <section className='header-container'>
      <aside className='header-aside'>
        <ImageThumbnail />
      </aside>
      <section className='header-text'>
        <HeaderTitle  handle="@LambdaSchool" timeStamp = '26 Jan'/>
        <HeaderContent />
      </section>
    </section>
  );
}

export default HeaderContainer;
