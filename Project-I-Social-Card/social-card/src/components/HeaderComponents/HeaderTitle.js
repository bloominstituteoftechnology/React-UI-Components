import React from 'react';
import './Header.css';
import moment from 'moment';

const HeadTitle = () => {
  const timeStamp = moment().format("DD MMM");
  return (
    <div className='headTitle'>
      <h2>Lambda School</h2>
      <p>@LambdaSchool</p>
      <p>• {timeStamp}</p>
    </div>
  );
}

export default HeadTitle;