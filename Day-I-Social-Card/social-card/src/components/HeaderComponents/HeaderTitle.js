import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
      <div className="headerTitle">
        <h3 className="title">{props.title}</h3>
        <p className="info">@lambdaSchool - 26 jan</p>
      </div>
    );
  }
  
  export default HeaderTitle;
