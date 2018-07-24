import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
  return (
    <p className="header-title">
      <span className='title'>Lambda School </span>
      <span className='sub-title twitter'> @Lambda School </span>
      <span> &middot; </span> 
      <span className='sub-title'> {moment().format('DD MMM')} </span>
    </p>
  )
}

export default HeaderTitle