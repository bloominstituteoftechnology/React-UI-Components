import React from 'react';
import './Header.scss';
import HeaderContent from './HeaderContent';

export default function HeaderTitle() {
  return (
    <div className="headerTitle">
      <p>Lambda School <span className="grey">@LambdaSchool • 26 jan</span></p>
      <HeaderContent/>
    </div>
  )
}
