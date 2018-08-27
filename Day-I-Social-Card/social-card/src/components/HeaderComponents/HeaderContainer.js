import React from 'react';
import HeaderContent from './HeaderContent.js'
import HeaderTitle from './HeaderTitle.js'
import './Header.css';

const HeaderContainer = () => {
  return (
    <div class= 'HeaderContainer'>
      <img src= {'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg'} />
      <HeaderTitle />
        <HeaderContent />
        </div>
  );
};

export default HeaderContainer;
