import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="title">
      <h1>Lambda School</h1>
      <a href="https://twitter.com/lambdaschool?lang=en">@LambdaSchool</a>
      <div className="date"> · 26 jan</div>
    </div>
  );
};

export default HeaderTitle;
