import React from 'react';
import './Header.css';

const HeaderContent = (props) => {
  return (
    <div className="header-title-right">
      <div className="header-title-top">
        <div className="header-title-name">Lambda School</div>
        <div className="header-title-handle">@LambdaSchool</div>
        <div className="header-title-date">&middot; 26 jan</div>
      </div>
      <div className="header-title-desc">
        <p>Let's learn React by building simple interfaces with components. Don't try to overthing it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
      </div>
  </div>
  )
}

export default HeaderContent;