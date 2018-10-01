import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      <p className='name'>
        Lambda School </p>
        <p className='handle'>@LambdaSchool &nbsp; &bull;</p>
        <p className='time-stamp'>
          {moment().format('D MMM')}
        </p>
    </div>
  );
}

export default HeaderTitle;
