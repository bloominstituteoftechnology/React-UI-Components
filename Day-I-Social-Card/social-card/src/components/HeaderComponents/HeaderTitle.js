import React from 'react';
import './Header.css';

const getCurrentDate = () => {
  const date = new Date()
  return date.toDateString()
}
const HeaderTitle = props => (<h2 className="header-container__title title-margin-small">
  <span className="header-container__h2">LambdaSchool
  </span>
  <span className="header-container__span">@LambdaSchool &middot; {getCurrentDate()}</span>
</h2>)

export default HeaderTitle
