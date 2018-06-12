import React from 'react';
import './Header.css';
import moment from 'moment';

// const LocalDate = () => {
//   let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
//   let monthOut = months[new Date().getMonth()];
//   let day = new Date().getDay();
//
//
//   return <div>{day} {monthOut}</div>
// }
const ImageTitle = () => {
  let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  let monthOut = months[new Date().getMonth()];
  let day = new Date().getDay();

  return (
    <div className="header-title">
      <h1 className="title-text">Lambda School </h1>
      <div className="header-handle">@LambdaSchool </div>
      <div className="date-time">&middot; {moment().format('D MMM')}</div>
    </div>
  );
};


export default ImageTitle;
