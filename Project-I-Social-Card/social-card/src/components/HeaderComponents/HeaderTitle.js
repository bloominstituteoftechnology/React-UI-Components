import React from 'react';
import './Header.css';

function HeaderTitle() {
  return (
    <div className="HeaderTitle">
      <span className="HeaderTitle__name">Lambda School </span>
      <span className="HeaderTitle__handle">@LambdaSchool</span> ·
      <span className="HeaderTitle__date"> 22 apr</span>
    </div>
  );
}

export default HeaderTitle;
