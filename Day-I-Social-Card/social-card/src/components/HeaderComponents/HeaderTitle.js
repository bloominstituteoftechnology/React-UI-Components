import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail'
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className="header">
      <ImageThumbnail />
      <h1 className="header-title">Lambda School</h1>
      <p className="header-name">@LambdaSchool</p>
      <p className="header-date">{moment().format("MMM Do")}</p>
    </div>
  )
}
export default HeaderTitle;
