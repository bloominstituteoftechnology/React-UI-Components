import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const HeaderTitle = () => {
    return (
      <div className="header-title-wrapper">
        <div className="header-title">
          <h4 className="appTitle">Lambda School</h4>
          <p className="emailAddress">info@LambdaSchool</p>
          <p className="separator">•</p>
          <p className="timeStamp">{moment().format("D MM YYYY")}</p>
          <br></br>
        </div>
    </div>
    )
  }

export default HeaderTitle;