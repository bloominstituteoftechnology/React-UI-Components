import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return(
    <div className="header-title">
      <span className="header-title__name">Lambda School</span>
      <span className="header-title__twitter">@LambdaSchool</span>
      <span className="header-title__date">26 Jan</span>
    </div>
  );
}

export default HeaderTitle;