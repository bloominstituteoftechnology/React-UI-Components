import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
  return (
    <div className="container">
      <HeaderTitle />
      <p className="headerContent">
        Let's learn React by building simple interfaces with components. Don't
        try to overthink it, juskt keep it simple and fun. Once you feel
        comfortabel using components you are well on your way to mastering
        React!
      </p>
    </div>
  );
};

export default HeaderContent;
