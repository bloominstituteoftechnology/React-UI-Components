import React from 'react';
import './Header.css';
import * as moment from 'moment';

const HeaderTitle = props => {
  let date = new moment().format('DD MMM').toString();

  return(
    <div className='header-title'>
      <p className='strong pads'>Lambda School</p>
      <p className='pads foggy'>@LambdaSchool</p>
      <p className='pads foggy'>{ date }</p>
    </div> 
  )
}

export default HeaderTitle;
