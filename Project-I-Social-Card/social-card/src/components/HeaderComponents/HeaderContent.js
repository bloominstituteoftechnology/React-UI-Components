import React from 'react';
import './Header.css';

const HeaderContent = props => {
  return (
    <p className='header-main-text'>{props.headerMainText}</p>
  )
  
}

export default HeaderContent;