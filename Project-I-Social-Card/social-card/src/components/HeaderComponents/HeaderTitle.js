import React from 'react';
import './Header.css';
import moment from 'moment'

const HeaderTitle = () => {
  return(
    <p className="HeaderTitle">Lambda School <span className="greyText">@LambdaSchool • {moment().format("DD MMM")}</span></p>
  );
}

export default HeaderTitle;