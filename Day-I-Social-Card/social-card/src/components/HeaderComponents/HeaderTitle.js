import React from 'react';
import './Header.css';
import moment from 'moment';
const time = moment();

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School @LambdaSchool
        <span className="time-stamp">{time.format('MMM Do ')}</span>
      </div>
    </div>
  );
};
export default HeaderTitle;
