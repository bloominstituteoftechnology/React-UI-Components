import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="HeaderTitle">
      <p className="displayName">Lambda School</p>
      <p className="accountName">@LambdaSchool</p>
      <p className="bullet"> • </p>
      <p className="date">Date</p>
    </div>
  )
}

export default HeaderTitle
