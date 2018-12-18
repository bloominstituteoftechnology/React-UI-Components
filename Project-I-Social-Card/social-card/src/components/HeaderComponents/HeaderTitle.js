import React from 'react';
import './Header.css';

var moment = require('moment');

const HeaderTitle = () => {
  return (
    <React.Fragment >
      <h5 className="header-title">Lambda School <span className="atLambda">@LambdaSchool   <span className="dot">    •</span>   {moment().format("D MMM")}</span></h5>
    </React.Fragment>
  )
}

export default HeaderTitle;