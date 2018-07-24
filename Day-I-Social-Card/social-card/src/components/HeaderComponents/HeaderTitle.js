import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      Lambda School
      <div className='handle'>
        @LambdaSchool
      </div>
      <div className='date'>
        26 Jan
      </div>
    </div>
  )
}

export default HeaderTitle;
