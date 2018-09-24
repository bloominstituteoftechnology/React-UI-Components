import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const HeaderTitle = () => {
    return (
      <div className="header-title-wrapper">
        <div className="header-title">
          <h4 className="bolded-title title-element">Lambda School</h4>
          <p className="email-handle title-element">info@LambdaSchool</p>
          <p className="bullet-point title-element">•</p>
          <p className="time-stamp title-element">{moment().format("D MM YYYY")}</p>
        </div>
        <HeaderContent />
    </div>
    )
  }

export default HeaderTitle;