import React from 'react';
import './Header.css';

const HeaderTitle = () => (
  <div className="header__title-container mb-2">
    <span className="header__title">Lambda School</span>
    <span className="header__handle">@LambdaSchool</span>
    <span className="header__timestamp">26 Jan</span>
  </div>
);

export default HeaderTitle;
