import React from 'react';
import './Header.css';
import moment from 'moment';

const ImageTitle = () => {

  return (
    <div className="header-title">
      <h1 className="title-text">Lambda School </h1>
      <div className="header-handle">@LambdaSchool </div>
      <div className="date-time">&middot; {moment().format('D MMM')}</div>
    </div>
  );
};


export default ImageTitle;
