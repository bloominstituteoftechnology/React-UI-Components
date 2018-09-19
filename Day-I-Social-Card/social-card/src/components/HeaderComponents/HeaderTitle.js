import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
  return (
    <header className="header-title">
      <h1>
        Lambda School
      </h1>
      <p className='handle'>
        {props.handle} &#183;  {props.timeStamp}
      </p>
    </header>
  );
}

export default HeaderTitle;
