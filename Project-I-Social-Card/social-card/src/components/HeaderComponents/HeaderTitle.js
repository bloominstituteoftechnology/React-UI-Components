import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>Lambda School</h1>
      <p className="fineprint">@LambdaSchool 26 Jan</p>
    </div>
  )
}

export default HeaderTitle