import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className="header-title-container">
      <div className="header-display-name">Lambda School</div>
      <div className="header-handle">@LambdaSchool</div>
      <div style={{ color: 'gray' }}>&bull;</div>
      <div className="header-timestamp">{moment().format("MMM D")}</div>
    </div>
  );
};

export default HeaderTitle;
