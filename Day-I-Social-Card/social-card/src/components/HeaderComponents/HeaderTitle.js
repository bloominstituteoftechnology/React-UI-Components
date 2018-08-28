import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
  return (
    <div className='header-title'>
      <h1>{props.name}</h1>
      <p className='handle'>{'@' + props.handle}<span> • {props.date}</span></p>
    </div>
  );
}

export default HeaderTitle;