import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = props => {
  return (
    <div className="header-title-wrap">
      <div className="header-name">Lambda School</div>
      <div className="header-tag">@LambdaSchool</div>
      <div className="header-space">&bull;</div>
      <div className="header-date">{moment().format('MMM D')}</div>
    </div>
  );
};

export default HeaderTitle;
