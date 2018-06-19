import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <div className="header-wrapper">
      Header Container <HeaderContent />
      <div className="header-info">
        Let's learn React by building simple interfaces with components. Don't try to overthinking
        it, just keep it simple and have fun. Once you feel comfortable using components you are
        well on your way to mastering React!
      </div>
    </div>
  );
};

export default HeaderContainer;
