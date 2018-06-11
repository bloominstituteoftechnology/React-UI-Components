import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="header-title-container">
      <div className="header-display-name">Lambda School</div>
      <div className="header-handle">@LambdaSchool</div>
      <div style={{ color: 'gray' }}>&bull;</div>
      <div className="header-timestamp">jan 26</div>
    </div>
  );
};

export default HeaderTitle;
