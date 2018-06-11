import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <p>
      <span className='title'>Lambda School</span>
      <span className='twitter'>@Lambda School</span>
      <span>&middot;</span> 
      <span className='date'>26 jan</span>
    </p>
  )
}

export default HeaderTitle