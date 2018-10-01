import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div>
      <h1><strong>Lambda School</strong> <span>@LambdaSchool • {moment().format('D MMM')}</span></h1>
    </div>
  )
}

export default HeaderTitle;