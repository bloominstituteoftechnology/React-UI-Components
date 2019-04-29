import React from 'react';
import './Header.css';
//import moment from 'moment';

const HeaderTitle = () => {
    //Javascript Date
    //const date = new Date()
    //const options = { month: "short" }
    //const short = new Intl.DateTimeFormat("en-US", options).format(date);
    //const today = `${date.getDate()} ${short}`

   // MomentJS Date
 // const momentDate = moment().format("D MMM")

  return (
    <div className="HeaderTitle">
      <p className="displayName bold">Lambda School</p>
      <p className="accountName gray">@LambdaSchool</p>
      <p className="bullet gray">• 26 jan</p>
    </div>
  )
}

export default HeaderTitle
