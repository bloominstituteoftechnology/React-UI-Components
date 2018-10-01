import React from 'react';
import './Header.css';

const lightGray = '#657887';

const Name = props => {
  return (
    <h1 style={{fontWeight: 800}}>Lambda School</h1>
  );
};

const Username = props => {
  return (
    <p style={{color: lightGray}}>@LambdaSchool</p>
  );
};

const BlackCircle = props => {
  return (
    <span style={{color: lightGray, fontSize: '7px'}}>&#9679;</span>
  );
};

const DateToday = props => {
  return (
    <p style={{color: lightGray}}>26 jan</p>
  );
};

const HeaderTitle = props => {
  return (
    <header>
      <Name />
      <Username />
      <BlackCircle />
      <DateToday />
    </header>
  );
};

export default HeaderTitle;
