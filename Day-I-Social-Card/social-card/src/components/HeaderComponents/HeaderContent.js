import React from 'react';
import './Header.css';
import './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle.js';

const headerContent = (props) => {
  return (
    <div className='headerContent'>
      <ImageThumbnail/>
      <div className='textContent'>
        <HeaderTitle/>
        <div className='headerParagraph'><p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p></div>
      </div>
    </div>
  )
}

export default headerContent;


