import React from 'react';
import './Header.css';

const HeaderContent = props => {
  return (
    <div className='header-content'>
      <p>{props.content}</p>
    </div>
  );
}

export default HeaderContent;