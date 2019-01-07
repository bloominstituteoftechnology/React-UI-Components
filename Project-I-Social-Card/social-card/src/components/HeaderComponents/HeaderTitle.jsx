import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h2 className="title">Lambda School <span>@LambdaSchool • {moment().format("MMM D")}</span></h2>
    </div>
  )
}


export default HeaderTitle;