import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="title">
      <h1>Lambda School</h1>
      <a href="https://twitter.com/lambdaschool?lang=en" target="_blank" rel="noopener noreferrer">@LambdaSchool</a>
      <div className="date"> · {moment().format('D MMM')}</div>
    </div>
  );
};

export default HeaderTitle;
