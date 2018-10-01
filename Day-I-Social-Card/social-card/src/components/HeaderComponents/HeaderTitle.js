import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <h1 className="HeaderTitle">
      Lambda School{' '}
      <span className="HeaderTitle__span">@LambdaSchool · 01 Oct</span>
    </h1>
  );
};

export default HeaderTitle;
