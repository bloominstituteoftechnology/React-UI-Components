import React from 'react';
import './Header.css';
import moment from 'moment';

let date = moment().format('DD MMM');

const HeaderTitle = () => {
  return (
    <div id='title'>
      <h2>Lambda School</h2>
      <span>@LambdaSchool </span>
      <ul id="date">
        <li>{date}</li>
      </ul>
    </div>
  );
}

export default HeaderTitle;
