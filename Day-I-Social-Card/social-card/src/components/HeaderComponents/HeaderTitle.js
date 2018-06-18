import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className='title-wrapper'>
      <h2 className='title'>Lambda School</h2>
      <p className='social-tag'>@LambdaSchool</p>
      <p className="date">26 Jan</p>
    </div>
  )
}

export default HeaderTitle;
