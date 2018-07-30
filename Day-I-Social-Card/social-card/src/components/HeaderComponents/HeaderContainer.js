import React from 'react';
import HeaderContent from './HeaderContent.js'
import HeaderTitle from './HeaderTitle.js'
import './Header.css';

const HeaderContainer = () => {
  return (
    <div class= 'HeaderContainer'>
      <HeaderTitle />
        <HeaderContent />
        </div>
  );
};

export default HeaderContainer;
