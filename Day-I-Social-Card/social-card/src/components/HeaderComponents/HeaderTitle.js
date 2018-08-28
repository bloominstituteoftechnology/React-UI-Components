import React from 'react';
import './Header.css';

// Create a <HeaderTitle /> component that displays the Lambda School header text, @LambdaSchool handle and timestamp.

const HeaderTitle = () => (
  <div className="title-wrapper">
    <h1>Lambda School</h1>
    <p className="grey-text">@LambdaSchool</p>
    <span>26 jan</span>
  </div>
);

export default HeaderTitle;