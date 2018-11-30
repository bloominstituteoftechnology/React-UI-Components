import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = (props) => {
  return (    
    <div className="header-title">
      <div className="header-title-name">Lambda School</div>
      <div className="header-title-handle">@LambdaSchool</div>
      <div className="header-title-separator">&middot;</div>
      <div className="header-title-date">{moment().format('h:mm:ss a')} </div>
    </div>
  )
}
  
export default HeaderTitle;
