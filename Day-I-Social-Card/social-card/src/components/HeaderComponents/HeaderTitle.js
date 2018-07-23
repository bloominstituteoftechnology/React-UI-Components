import React from 'react';
import './Header.css';

const HeaderTitle = props => (
  <div className="header-title">
    <div className="name"> Lambda School </div> 
    <div className="sub"> @LambdaSchool </div>
    <div className="sub">{props.date}</div>
  </div>
);

export default HeaderTitle;