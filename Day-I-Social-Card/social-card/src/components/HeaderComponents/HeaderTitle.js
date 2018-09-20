import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>Lambda School</h1>
      <p>@LambdaSchool</p>
      <p className="separator">·</p>
      <p>26 jan</p>
    </div>
  );
};

export default HeaderTitle;
