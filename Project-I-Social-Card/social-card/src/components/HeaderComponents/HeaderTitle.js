import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const time = moment().format('MMM Do');

function HeaderTitle() {
  return (
    <div className="HeaderTitle">
      <h3>Lambda School</h3>
      <p className="lambdaHandle">@LambdaSchool &#8729; {time} </p>
      <HeaderContent />
    </div>
  );
}

export default HeaderTitle;