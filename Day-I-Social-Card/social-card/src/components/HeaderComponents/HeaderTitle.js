import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
  return (
    <div className='userName'><h3 className='screenName'>Lambda School</h3><h4 className='atName'> @LambdaSchool •</h4><div className='timeStamp'>26 jan</div></div>
  )
}

export default HeaderTitle;