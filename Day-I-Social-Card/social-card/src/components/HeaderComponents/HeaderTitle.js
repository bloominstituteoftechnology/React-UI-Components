import React from 'react';
import './Header.css';

const LocalDate = () => {
  let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  let monthOut = months[new Date().getMonth()];
  let day = new Date().getDay();

  return <div>{day} {monthOut}</div>
}
const ImageTitle = () => {
  return (
    <div className="header-title">
      <h1 className="title-text">Lambda School </h1>
      <div className="header-handle">@LambdaSchool </div>
      <div className="date-time"><LocalDate /></div>
    </div>
  );
};

export default ImageTitle;
