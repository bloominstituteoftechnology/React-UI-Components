import React from 'react';
import './Header.css';

const HeadTitle = () => {
  const timeStamp = Date(Date.now()).toString();
  return (
    <div className='headTitle'>
      <h2>Lambda School</h2>
      <p>@LambdaSchool</p>
      <p>{timeStamp}</p>
    </div>
  );
}

export default HeadTitle;