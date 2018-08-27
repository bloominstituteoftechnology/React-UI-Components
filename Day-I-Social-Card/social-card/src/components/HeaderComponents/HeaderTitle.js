import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  const date = new Date();
  const options = { month: "short" };
  const short = new Intl.DateTimeFormat("en-US", options).format(date);
  const today = `${date.getDate()} ${short}`;


  return (
    <div className="HeaderTitle">
      <p className="displayName bold">Lambda School</p>
      <p className="accountName gray">@LambdaSchool</p>
      <p className="bullet gray">•</p>
      <p className="date gray">{today}</p>
    </div>
  )
}

export default HeaderTitle
