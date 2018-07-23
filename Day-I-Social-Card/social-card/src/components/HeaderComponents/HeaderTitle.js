import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="title-container">
      <h1>Lambda School</h1>
      <p className="title-container-handler colored">@LambdaSchool</p>
      <span className="title-container-handler-space">.</span>
      <p className="title-container-handler-date colored">23 jul</p>
    </div>
  );
};

export default HeaderTitle;
