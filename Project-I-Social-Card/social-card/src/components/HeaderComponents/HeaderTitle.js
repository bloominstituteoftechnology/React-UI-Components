import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

function HeaderTitle() {
  return (
    <div className="HeaderTitle">
      <h3>Lambda School</h3>
      <p className="lambdaHandle">@LambdaSchool &#8729; 26 jan</p>
      <HeaderContent />
    </div>
  );
}

export default HeaderTitle;