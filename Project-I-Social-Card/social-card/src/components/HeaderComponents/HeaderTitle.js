import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="title">
      <p className="name">{props.name}</p>
      <div className="small-font">
        <p className="handle">{props.handle}</p>
        <p className="timestamp">26 jan</p>
      </div>
    </div>
  )
}

const HeaderTitleInfo = props => {
  return (
    <HeaderTitle name="Lambda School" handle="@LambdaSchool"/>
  )
}

export default HeaderTitleInfo;