import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderRight = () => {
  return (
    <div id="header-right">
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
}

export default HeaderRight;