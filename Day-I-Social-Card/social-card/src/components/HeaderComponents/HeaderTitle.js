import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div class="header-title-wrapper">
      <h1>Lambda School</h1>
      <span>@LambdaSchool * 26 Jan</span>
      <HeaderContent />
    </div>)
};

export default HeaderTitle;
