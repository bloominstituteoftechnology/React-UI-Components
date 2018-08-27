import React from 'react';
import './Header.css';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import HeaderContent from '../HeaderComponents/HeaderContent';

const HeaderTitleText = () => (
  <div className='header-title-text'>
    <HeaderTitle />
    <HeaderContent />
  </div>
)
export default HeaderTitleText;