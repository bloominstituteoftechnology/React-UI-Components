import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContentInfo = props => {
  const size = '10px';
  return (
    <p style={{ marginTop: size }}>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
  );
};

const HeaderContent = props => {
  return (
    <div className="header-text">
      <HeaderTitle />
      <HeaderContentInfo />
    </div>
  );
};

export default HeaderContent;
