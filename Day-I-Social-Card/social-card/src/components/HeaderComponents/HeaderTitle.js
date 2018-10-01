import React from 'react';
import './Header.css';

const Title = props => {
  let d = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
      <h2>Lambda School <span>@LambdaSchool · {months[d.getMonth()] + d.getDate}</span></h2>
  );
}

export default Title;
