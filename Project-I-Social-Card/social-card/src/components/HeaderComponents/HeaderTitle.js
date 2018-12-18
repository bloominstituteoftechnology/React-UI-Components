import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="header-title">
      <h3>{props.headTitle}</h3>
      <p>{props.grayText}</p>
    </div>
  )
}

export default HeaderTitle;