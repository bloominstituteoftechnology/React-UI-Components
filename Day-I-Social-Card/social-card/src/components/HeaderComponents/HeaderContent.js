import React from 'react';
import './Header.css';

const HeaderContent = () => {
  return (
    <div className="header-content">
        <p>Let's learn React by builing simple interfaces with components. Don't try to overthink it (HAHH! fat chance David), just keep it simple and have fun.</p>

  </div>
  )
}


export default HeaderContent;
/*
class HeaderTitle = () => {
    return (
      <div className="header-title-wrapper">
        <div className="header-title">
          <h4 className="bolded-title title-element">Lambda School</h4>
          <p className="email-handle title-element">info@LambdaSchool</p>
          <p className="bullet-point title-element">&#x2219</p>
          <p className="time-stamp title-element">{moment().format("D MM YYYY")}</p>
        </div>
        <HeaderContent />
    </div>
    )
  }
*/