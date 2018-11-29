import React from 'react';
import './Header.css';
import './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail';

const headerContent = (props) => {
  return (
    <div className='headerContent'>
      <ImageThumbnail/>
      <div className='textContent'>
        <div className='userName'><h3 className='screenName'>Lambda School</h3><h4 className='atNameAndDate'> @LambdaSchool • 26 jan</h4></div>
        <div className='headerParagraph'><p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p></div>
      </div>
    </div>
  )
}

export default headerContent;


