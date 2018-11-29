import React from 'react';
import './Header.css';

var moment = require('moment');

const headerTitle = (props) => {
  return (
    <h4>Lambda School <span className="date">@LambdaSchool . {moment().format("MMM Do")} </span></h4>
  );
};

export default headerTitle;