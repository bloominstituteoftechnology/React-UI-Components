import React from 'react';
import './Header.css';


const HeaderTitle = props => {
  return (
    <div className="header-title-container">
      <h1 className="header-title">Lambda School</h1>
      <p className="header-@">@LambdaSchool</p>
      <p className="header-time">26 jan</p>
    </div>
  )
}

export default HeaderTitle;