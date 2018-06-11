import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <p class="header-title">
      <span className='title'>Lambda School </span>
      <span className='sub-title twitter'> @Lambda School </span>
      <span> &middot; </span> 
      <span className='sub-title'> 26 jan </span>
    </p>
  )
}

export default HeaderTitle