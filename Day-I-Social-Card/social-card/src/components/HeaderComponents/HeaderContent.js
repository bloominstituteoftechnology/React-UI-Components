import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContent = props => {
  return (
    <div className="header-content">
      Let's learn React by building simple interfaces with components. Don't try
      to overthink it, just keep it simple and have fun. Once you feel
      comfortable using components you are well on your way to mastering React!
    </div>
  );
};

export default HeaderContent;
