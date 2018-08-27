import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="header-title-wrapper">
      <div className="header-user-name">Lambda School</div>
      <div className="header-user-tag">@LambdaSchool</div>
      <div className="header-seperator">&bull;</div>
      <div className="header-creation-date">26 jan</div>
    </div>
  );
};

export default HeaderTitle;
