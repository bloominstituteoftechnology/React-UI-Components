import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent.js'

const HeaderContainer = props => {
  return (
    <div className="header-container">
      <HeaderContent/>
    </div>
  )
}

export default HeaderContainer;