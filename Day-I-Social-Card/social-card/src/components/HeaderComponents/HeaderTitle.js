import React from 'react';
import './Header.css';
import moment from 'moment';


const HeaderTitle = () => {

  return(
    <div className="header-title">
      <span className="bold">Lambda School</span> <span className="gray">@LambdaSchool · { moment().format('Do MMM').toLowerCase() }</span>
    </div>
  );
};

export default HeaderTitle;
