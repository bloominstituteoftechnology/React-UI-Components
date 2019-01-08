import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className='header-title-container'>
      <h1>Lambda School</h1>
      <div className='header-at-lambda'>@LambdaSchool</div>
      <div className='header-dot'>&#183;</div>
      <div className='header-date'>26 jan</div>
    </div>
  );
};

export default HeaderTitle;
