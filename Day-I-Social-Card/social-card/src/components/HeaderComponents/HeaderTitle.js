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
    <div class="header-title">
      <h1 class="title-text">Lambda School </h1>
      <div class="header-handle">@LambdaSchool </div>
      <div class="date-time"><LocalDate /></div>
    </div>
  );
};

export default ImageTitle;
