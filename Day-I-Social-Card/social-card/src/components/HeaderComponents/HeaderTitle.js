import React from 'react';
import './Header.css';

const Title = props => {
  let d = new Date();
  const months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];

  return (
      <h2>Lambda School <span>@LambdaSchool · {`${d.getDate()} ${months[d.getMonth()]}`}</span></h2>
  );
}

export default Title;
