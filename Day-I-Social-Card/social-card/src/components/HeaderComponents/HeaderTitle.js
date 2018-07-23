import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return <div className="header-title">
            <div><strong>Lambda School</strong></div>
            <TwitterHandle />
            <HeaderDate />
         </div>;
};

export default HeaderTitle;

const TwitterHandle = () => {
  return <div className="twitter-handle">
  @LambdaSchool   &middot;
  </div>;
};

const HeaderDate = () => {
  let todayDate = new Date().toDateString()
  return <div className="header-date"> {todayDate }</div>;
  // return '26 jan';
};
