import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = props => {
  return (
    <div className="header-title-wrapper">
      <div className="header-user-name">{props.name}</div>
      <div className="header-user-tag">{props.tagname}</div>
      <div className="header-seperator">&bull;</div>
      <div className="header-creation-date">{moment().format("MMM D")}</div>
    </div>
  );
};

export default HeaderTitle;
