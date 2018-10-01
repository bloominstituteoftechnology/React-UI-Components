import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle.js'

const HeaderContainer = props => {
  return (
    <div className="header-container">
    <HeaderTitle/>
    </div>
  )
}

export default HeaderContainer;