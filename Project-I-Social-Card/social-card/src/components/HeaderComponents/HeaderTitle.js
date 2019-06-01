import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => { 
  return (
    <header>
      <div className="title">
        <h1 className="heading">Lambda School</h1>
        <p className="header-date">@LambdaSchool 13 May</p>
      </div>
      <HeaderContent />
    </header>
  );
}

export default HeaderTitle;