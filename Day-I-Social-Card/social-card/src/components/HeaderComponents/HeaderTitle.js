import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className='header-title'>
      <strong>{props.name}</strong>
      <a href='#'>{props.handle}</a>
      <date>26 jan</date>
    </div>
  );
}

export default HeaderTitle;