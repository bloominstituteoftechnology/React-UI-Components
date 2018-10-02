import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderTitle = props => {
  return (
    <div className='header-title'>
      <div className='header-username'>Lambda School</div>
      <div className='header-userhandle'>@LambdaSchool</div>
      <div className='posted-date'><FontAwesomeIcon icon="calendar" /> 26 jan</div>
    </div>
  )
}


export default HeaderTitle;