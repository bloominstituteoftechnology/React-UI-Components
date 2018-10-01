import React from 'react';
import './Header.css';

const Name = props => {
  return (
    <h1 style={{fontWeight: 800}}>Lambda School</h1>
  );
};

const Username = props => {
  const lightGray = '#ACB5BF';

  return (
    <p style={{color: lightGray}}>@LambdaSchool</p>
  );
};

const DateToday = props => {
  const lightGray = '#ACB5BF';

  return (
    <p style={{color: lightGray}}>26 jan</p>
  );
};

const HeaderTitle = props => {
  return (
    <header>
      <Name />
      <Username />
      <DateToday />
    </header>
  );
};

export default HeaderTitle;
