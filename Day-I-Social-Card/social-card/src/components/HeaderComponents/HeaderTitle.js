import React from 'react';
import './Header.css';

let day = new Date().getDate();
let month = new Date().getMonth();
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const HeaderTitle = props => {
  return (
    <h1>
      Lambda School{' '}
      <span>
        @LambdaSchool • {day} {months[month]}
      </span>
    </h1>
  );
};

export default HeaderTitle;
