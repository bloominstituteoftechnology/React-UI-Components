import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="header-title-wrap">
      <div className="header-name">Lambda School</div>
      <div className="header-tag">@LambdaSchool</div>
      <div className="header-space">&bull;</div>
      <div className="header-date">26 jan</div>
    </div>
  );
};

export default HeaderTitle;
