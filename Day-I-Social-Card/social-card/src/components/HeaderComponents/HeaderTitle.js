import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className='header-title'>
      <strong>Lambda School</strong>
      <a href='#'>@LambdaSchool</a>
      <date>26 jan</date>
    </div>
  );
}

export default HeaderTitle;