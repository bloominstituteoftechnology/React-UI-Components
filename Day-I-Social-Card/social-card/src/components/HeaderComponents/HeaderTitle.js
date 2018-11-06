import React from 'react';
import moment from 'moment/moment.js';
import './Header.css';

const HeaderTitle = () => {
  return (
    <p className="header--title">
      Lambda School <span>@LambdaSchool . {moment(new Date('26-Jan')).format('DD MMM').toLowerCase()}</span>
    </p>

  );
}

export default HeaderTitle;