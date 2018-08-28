import React from 'react';
import './Header.css';

// importing other Components
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContent = props => {
  return (
    <div className = 'header-text'>
      Let us learn React by building simple interfaces with components. Do not try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on the way to mastering React!
    </div> // apostrophes are causing weird issues here
  );
};

export default HeaderContent;
