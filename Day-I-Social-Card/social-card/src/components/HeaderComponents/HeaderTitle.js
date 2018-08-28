import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className = 'header-title-wrapper'>
      <div className = 'header-name'>Lambda School</div>
      <div className = 'header-tag'>@LambdaSchool</div>
      <div className = 'header-break'>&bull;</div>
      <div className = 'header-date'>January 26</div>
    </div>
  );
};

export default HeaderTitle;
