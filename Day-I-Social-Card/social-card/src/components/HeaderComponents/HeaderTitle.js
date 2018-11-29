import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
  return (
    <div className="header-title">
      <div className="header-title-name">Lambda School</div>
      <div className="header-title-handle">@LambdaSchool</div>
      <div className="header-title-date">&middot; 26 jan</div>
    </div>
  )
}
  
export default HeaderTitle;
