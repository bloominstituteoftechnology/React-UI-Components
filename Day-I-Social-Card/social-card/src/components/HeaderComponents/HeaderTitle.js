import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className='header-title'>
      <div className='header-username'>Lambda School</div>
      <div className='header-userhandle'>@LambdaSchool</div>
      <div className='posted-date'><i className="fas fa-calendar"></i> 26 jan</div>
    </div>
  )
}


export default HeaderTitle;