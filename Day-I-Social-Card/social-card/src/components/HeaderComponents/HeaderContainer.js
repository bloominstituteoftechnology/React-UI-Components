import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderContainer = (props) => {
  return (
    <div className='headerContainer'>
      <HeaderContent/>
    </div>
  )
}

export default HeaderContainer;