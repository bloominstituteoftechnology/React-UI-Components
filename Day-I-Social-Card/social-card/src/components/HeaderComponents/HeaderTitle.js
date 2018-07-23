import React from 'react';
import moment from 'moment'
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      <h2>Lambda School</h2> 
      <span>@LambdaSchool · {moment().format('D MMM')}</span>  
    </div>
  )
}

export default HeaderTitle;