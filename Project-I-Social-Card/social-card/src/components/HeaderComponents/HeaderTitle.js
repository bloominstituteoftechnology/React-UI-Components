import React from 'react';
import './Header.css';
import moment from 'moment';

// var moment = require('moment');

const HeaderTitle = () => {
  return (
    <div className='header-title-container'>
      <h1>Lambda School</h1>
      <div className='header-at-lambda'>@LambdaSchool</div>
      <div className='header-dot'>&#183;</div>
      <div className='header-date'>{moment().format('D MMM')}</div>
    </div>
  );
};

export default HeaderTitle;
